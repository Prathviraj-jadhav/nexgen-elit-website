'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip loading screen on return visits (session already loaded)
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('nexgen-loading-done');
      if (hasLoaded) return;
    }

    // Show the loading screen
    setVisible(true);

    // Fade out after 400ms, fully remove after 700ms
    const fadeTimer = setTimeout(() => {
      const el = document.getElementById('nexgen-loading-screen');
      if (el) el.style.opacity = '0';
    }, 400);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('nexgen-loading-done', 'true');
      }
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="nexgen-loading-screen"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        transition: 'opacity 300ms ease-out',
        opacity: 1,
      }}
    >
      <div className="loading-screen-text">NEXGEN ELIT</div>
      <div className="loading-screen-bar">
        <div className="loading-screen-bar-fill" />
      </div>
    </div>
  );
}
