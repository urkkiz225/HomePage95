import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import './style.css';
import urkkiz from './ProjectHeaders/urkkiz.jpg';
import cat from './cat.png';
import WindowComponentDescription from './WindowComponentDescription';
import WindowComponentImage from './WindowComponentImage';
import WindowComponentProject from './WindowComponentProject';

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
      const baseWidth = 1280;
      const baseHeight = 720;
      const currentWidthScale = window.innerWidth / baseWidth;
      const currentHeightScale = window.innerHeight / baseHeight;
      const finalScale = 2 * Math.min(currentWidthScale, currentHeightScale);
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
    <ThemeProvider theme={modernDark}>
      <div className="App" id="App">
        <div style={{ paddingTop: `165px` }}>
          <WindowComponentProject
            title="About Me"
            content={`I am a programmer from Finland, greatly dabbling 
                  in many areas upon the programmer space. Studying in Aalto university (Informaatioverkostot) 2025 ->. My current projects and masteries especially include many, many years of game development in Unity and software development
                  in Java. My other coding knowledge extends but isn't limited to Python, C++, JavaScript, CSS, HTML, Godot, UE5, ethical hacking and even a bit of Assembly - in thoughts here is said my grandiose love for everything computer related. I also know the ins and outs of teamwork, having been in and lead multiple indie game and software
                  project teams along the years - for ad infinitum I always strive to learn more. My current interest is learning network engineering and web development. Outside of programming I play the piano, make music, dabble in art and other creative work - that is, if the busy 
                  timetables derived from the ongoing last steps of high school and programming work allows such joys.`}
            posX={12}
            posY={7}
            width={700}
            height={395}
            alternativeButtonText={'Check out my GitHub!'}
            githubLink={'https://github.com/urkkiz225'}
            WindowComponentProject />
          <span className='ms-sans-serif'>
            <h1 style={{ position: 'relative', top: '-30px', minHeight: '3vh', color: 'white', transform: `scale(${1.1})`, textWrap: 'pretty', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>The windows are draggable! Be sure to also check out my <a href="/HomePage95/#/portfolio" style={{ color: 'red' }}>portfolio.</a>. My LinkedIn is <a href="https://www.linkedin.com/in/urho-saari-9972ba26a/" style={{ color: 'magenta' }}>here.</a>{isMobile && (" also there are some problems on mobile right now...")}</h1>
            <WindowComponentImage
              title="..."
              img={urkkiz}
              imgHeight={456}
              imgWidth={310}
              {...!isMobile ? ({ posX: 50, posY: 60 }) : ({ posX: 62, posY: 75 })}
              width={353}
              height={540}
              imgScale={1}
              WindowComponentImage />
          </span>
        </div>
      </div>
      {!isMobile && (
        <div>
          <img src={cat} style={{ position: 'absolute', bottom: `${-1230 * mainScale}px` }} alt='cat' className="cat" />
        </div>
      )}
      <AppBarComponent />
    </ThemeProvider>
  );
};

export default MainPage;