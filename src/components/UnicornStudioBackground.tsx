'use client';

import React from 'react';
import UnicornScene from 'unicornstudio-react/next';

interface UnicornStudioBackgroundProps {
  projectId?: string;
  className?: string;
  opacity?: number;
}

export const UnicornStudioBackground: React.FC<UnicornStudioBackgroundProps> = ({
  projectId = 'dXEQHwpIuPHWxbKySlin',
  className = '',
  opacity = 0.4,
}) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <UnicornScene
        projectId={projectId}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        lazyLoad={true}
        scale={0.5}
      />
    </div>
  );
};
