import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 768,
    height: 0,
  });

  useEffect(() => {
    let currentWindow: (Window & typeof globalThis) | null = null;
    if (window) {
      currentWindow = window;
      setScreenSize({
        width: currentWindow.innerWidth,
        height: currentWindow.innerHeight,
      });
    }

    const handleResize = () => {
      if (currentWindow) {
        setScreenSize({
          width: currentWindow.innerWidth,
          height: currentWindow.innerHeight,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
