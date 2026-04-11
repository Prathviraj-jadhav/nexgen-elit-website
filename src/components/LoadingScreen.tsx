'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';

function getHasLoaded(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('nexgen-loading-done');
}

export default function LoadingScreen() {
  const hasLoaded = useSyncExternalStore(
    (cb) => {
      window.addEventListener('storage', cb);
      return () => window.removeEventListener('storage', cb);
    },
    getHasLoaded,
    () => null
  );
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (hasLoaded) return;

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      sessionStorage.setItem('nexgen-loading-done', 'true');
      setFading(false);
    }, 1600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [hasLoaded]);

  if (hasLoaded || !fading) return null;

  return (
    <div className={fading ? 'loading-screen loading-screen-fade' : 'loading-screen'}>
      <div className="loading-screen-text">NEXGEN ELIT</div>
      <div className="loading-screen-bar">
        <div className="loading-screen-bar-fill" />
      </div>
    </div>
  );
}
