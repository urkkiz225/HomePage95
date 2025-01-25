import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import './style.css';
import urkkiz from './ProjectHeaders/urkkiz.jpg';
import cat from './cat.png';
import WindowComponentDescription from './WindowComponentDescription';
import WindowComponentImage from './WindowComponentImage';

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [mainScale, setMainScale] = useState(1);
  
    useEffect(() => {
      const checkMobile = () => {
        const isNarrowScreen = window.matchMedia('(max-width: 1000px)').matches;
        const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(isNarrowScreen || isMobileDevice);
      };
  
      const calculateScale = () => {
        const baseWidth = 1900;
        const baseHeight = 1000;
        const currentWidthScale = window.innerWidth / baseWidth;
        const currentHeightScale = window.innerHeight / baseHeight;
        const finalScale = 2*Math.min(currentWidthScale, currentHeightScale);
        setMainScale(finalScale);
      };
  
      checkMobile();
      calculateScale();
      window.addEventListener('resize', checkMobile);
      window.addEventListener('resize', calculateScale);
  
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }, []);
    return (
      <span className='ms-sans-serif'>
        <ThemeProvider theme={modernDark}>
          <div className="App" id="App">
            <div style={{ paddingTop: '130px' }}>
              <WindowComponentDescription
                title = "About Me"
                content = {`I am a programmer from Finland, greatly dabbling 
                  in many areas upon the programmer space.  My current projects and masteries especially include many, many years of game development in Unity and software development
                  in Java. My other coding knowledge extends but isn't limited to Rust, Python, C++, JavaScript, CSS, HTML, Godot, UE5, ethical hacking and even a bit of Assembly - in thoughts here is said my grandiose love for everything computer related. I also know the ins and outs of teamwork, having been in multiple indie 
                  project teams along the years - and ad infinitum I always strive to learn more. My current interest is learning network engineering and web development. Outside of programming I play the piano, make music, dabble in art and other creative work - that is, if the busy 
                  timetables derived from the ongoing last steps of high school and programming work allows such joys.`}
                posX={12}
                posY={7}
                width={600}
                height={360}
              WindowComponentDescription/>
              <WindowComponentImage
                title = "..."
                img = {urkkiz}
                imgHeight = {456}
                imgWidth = {310}
                {...!isMobile?({posX:62, posY:30}):({posX:62, posY:65})}
                width={353}
                height={540}
                imgScale={1}
              WindowComponentImage/>
            </div>
          </div>
          {!isMobile && (
              <div>
                <img src={cat} style={{ position: 'absolute', bottom: `${-1230 * mainScale}px` }} alt='cat' className="cat" />
              </div>
            )}
        <AppBarComponent />
        </ThemeProvider>
      </span>
    );
};

export default MainPage;