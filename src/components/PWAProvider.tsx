'use client';

import { useEffect } from 'react';

export function PWAProvider() {
  useEffect(() => {
    const consent = localStorage.getItem('nexgen_consent');
    if (consent === 'accepted' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('SW registered: ', registration);
          },
          (registrationError) => {
            console.log('SW registration failed: ', registrationError);
          }
        );
      });
    }
  }, []);

  return null;
}
