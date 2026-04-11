import { useEffect, useState } from 'react';

interface UserData {
  visitTimestamp: string;
  visitedPages: string[];
  deviceType: 'mobile' | 'desktop';
  isReturning: boolean;
}

export const useUserTracking = (aboutRef?: React.RefObject<HTMLDivElement | null>) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Only run if consent is given
    const consent = localStorage.getItem('nexgen_consent');
    if (consent !== 'accepted') return;

    const deviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';
    const isReturning = !!localStorage.getItem('nexgen_visited');
    const visitedPages = JSON.parse(localStorage.getItem('nexgen_pages') || '[]');
    const currentPage = window.location.pathname;

    if (!visitedPages.includes(currentPage)) {
      visitedPages.push(currentPage);
    }

    const data: UserData = {
      visitTimestamp: new Date().toISOString(),
      visitedPages,
      deviceType,
      isReturning
    };

    setUserData(data);
    localStorage.setItem('nexgen_visited', 'true');
    localStorage.setItem('nexgen_pages', JSON.stringify(visitedPages));

    // Scroll tracking for About section
    if (aboutRef && aboutRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            localStorage.setItem('nexgen_about_viewed', 'true');
            localStorage.setItem('nexgen_last_metadata', JSON.stringify({
              ...data,
              viewedAbout: true
            }));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(aboutRef.current);
      return () => observer.disconnect();
    }
  }, [aboutRef]);

  return userData;
};

export const getMetadata = () => {
    if (typeof window === 'undefined') return null;
    const deviceType = window.innerWidth < 768 ? 'mobile' : 'desktop';
    const isReturning = !!localStorage.getItem('nexgen_visited');
    const visitedPages = JSON.parse(localStorage.getItem('nexgen_pages') || '[]');
    const currentPage = window.location.pathname;
    
    return {
        deviceType,
        isReturning,
        visitedPages,
        currentPage,
        timestamp: new Date().toISOString()
    };
};
