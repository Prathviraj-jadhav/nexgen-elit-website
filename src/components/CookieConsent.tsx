'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem('nexgen_consent');
    if (!consent) {
      // Delay slightly for better entrance effect
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle implicit acceptance when clicking outside the banner
  useEffect(() => {
    if (show) {
      const handleOuterClick = (e: MouseEvent) => {
        if (bannerRef.current && !bannerRef.current.contains(e.target as Node)) {
          handleChoice(true);
        }
      };
      // Use mousedown for faster detection
      document.addEventListener('mousedown', handleOuterClick);
      return () => document.removeEventListener('mousedown', handleOuterClick);
    }
  }, [show]);

  const handleChoice = (accepted: boolean) => {
    const choice = accepted ? 'accepted' : 'rejected';
    localStorage.setItem('nexgen_consent', choice);
    setShow(false);
    
    if (accepted && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        console.log('SW registered after consent:', reg);
      });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={bannerRef}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 w-full z-[9999] bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-6 py-6 sm:py-5 md:px-12 lg:px-20"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left Side: Text */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-sm md:text-base font-semibold text-black mb-1">
                We use cookies & cache for better performance
              </h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-3xl">
                We store small data in your browser to improve speed, remember preferences, and enhance your experience. 
              </p>
            </div>

            {/* Right Side: Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => handleChoice(false)}
                aria-label="Reject performance cookies and caching"
                className="flex-1 sm:flex-none px-6 py-2.5 text-xs font-semibold text-black border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Reject
              </button>
              <button
                onClick={() => handleChoice(true)}
                aria-label="Accept performance cookies and caching"
                className="flex-1 sm:flex-none px-8 py-2.5 text-xs font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
