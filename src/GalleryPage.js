import AppBarComponent from './AppBarComponent';
import { ThemeProvider } from 'styled-components';
import redWine from 'react95/dist/themes/redWine';
import cat from './cat.png';
import React, { useEffect, useState } from 'react';

const GalleryPage = () => {
  const [isMobile, setIsMobile] = useState(false);
      const [isNarrowScreen, setIsNarrowScreen] = useState(false);
      const [isMobileDevice, setIsMobileDevice] = useState(false);
      const [mainScale, setMainScale] = useState(1);
    
      useEffect(() => {
        const checkMobile = () => {
          const narrow = window.matchMedia('(max-width: 1000px)').matches;
          const mobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          setIsNarrowScreen(narrow);
          setIsMobileDevice(mobile);
          setIsMobile(narrow || mobile);
        };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <ThemeProvider theme={redWine}>
      <span className="ms-sans-serif">
        <AppBarComponent />
        <div style={{ paddingTop: '130px' }}>
          <h1 style={{ position: 'relative', top: '0px', minHeight: '3vh', color: 'white', transform: `scale(${1.1})`, textWrap: 'pretty', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>An evil <a href="/HomePage95/#/main" style={{ color: 'red' }}>gnome</a> seems to have eaten all the content on this page. {isMobileDevice && ("(also there are some problems on mobile right now...)")}</h1>
          <img src={cat} alt='cat' className="center-image" />
        </div>
      </span>
    </ThemeProvider>
  );
};

export default GalleryPage;