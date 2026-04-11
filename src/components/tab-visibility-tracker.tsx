'use client';

import { useEffect, useRef } from 'react';

const TITLE_ACTIVE = 'Helping Logistics Companies Run Smarter Operations';
const TITLE_STABLE = 'Supporting Logistics Companies with Scalable Systems';

const TAB_AWAY_PHRASES = [
  "You'll come back anyway",
  'We saw that switch',
  "Don't get distracted",
  'Focus.',
  'Come back',
  'You left for that?',
  "We're judging quietly",
  'You clicked… that?',
  'We felt that betrayal',
  'You remember us.',
];

const WELCOME_BACK_PHRASES = [
  'Good to see you',
  'Welcome back',
  'smart choice',
];

export default function TabVisibilityTracker() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phraseIndex = useRef(0);
  const welcomeIndex = useRef(0);
  const welcomeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Set initial title on mount
    document.title = TITLE_ACTIVE;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // ── User left the tab ──
        // Clear any pending welcome-back timeout
        if (welcomeTimeoutRef.current) {
          clearTimeout(welcomeTimeoutRef.current);
          welcomeTimeoutRef.current = null;
        }

        phraseIndex.current = 0;
        document.title = TAB_AWAY_PHRASES[0];

        // Rotate phrases every 7 seconds
        intervalRef.current = setInterval(() => {
          phraseIndex.current = (phraseIndex.current + 1) % TAB_AWAY_PHRASES.length;
          document.title = TAB_AWAY_PHRASES[phraseIndex.current];
        }, 7000);
      } else {
        // ── User came back ──
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        // Show welcome-back phrases (each for ~2.3s so all 3 show in ~7s total)
        welcomeIndex.current = 0;
        document.title = WELCOME_BACK_PHRASES[0];

        const welcomeInterval = setInterval(() => {
          welcomeIndex.current++;
          if (welcomeIndex.current < WELCOME_BACK_PHRASES.length) {
            document.title = WELCOME_BACK_PHRASES[welcomeIndex.current];
          } else {
            clearInterval(welcomeInterval);
          }
        }, 2333);

        // After 7 seconds, settle on stable title
        welcomeTimeoutRef.current = setTimeout(() => {
          document.title = TITLE_STABLE;
        }, 7000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (welcomeTimeoutRef.current) clearTimeout(welcomeTimeoutRef.current);
    };
  }, []);

  return null;
}
