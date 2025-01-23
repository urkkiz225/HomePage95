import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import redWine from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import WindowComponentProject from './WindowComponentProject';
import './style.css';
import cat from './cat.png';
import Kesasim from './ProjectHeaders/Kesasim.png';
import Journey from './ProjectHeaders/Journey.png';
import ChickenWare from './ProjectHeaders/ChickenWare.png';

const PortfolioPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isNarrowScreen = window.matchMedia('(max-width: 1000px)').matches;
      const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isNarrowScreen || isMobileDevice);
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
        <div style={{ paddingTop: '130px' }}>
            <WindowComponentProject
                title = "Kesäsimulaattori"
                content = "An ages old project, made in Unity 2020.1.1f1, HDRP utilized and C# typed all the way through. Contains light shaderwork in the mix, like compute gerstner wave shaders."
                contentSideRight = "A certified Finnish summer experience - down to the finite details. A passion project for a while - before the inevitablility of it all pushed towards new winds. Release on GitHub is outdated."
                width = {600}
                height = {420}
                {
                  ...isMobile? {posX: '0', posY: '10'} : { posX: 14, posY: 8, mainScale: '1' }
                }
                img = {Kesasim}
                imgwidth = {320}
                imgHeight={180}
                githubLink={"https://github.com/urkkiz225/kesasimulaattori"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "Journey"
                contentSideLeft = "An old horror game-esque high-fidelity audiovisual demo - key points are sound and environment design."
                content = "Made utilizing HDRP and the Unity game engine."
                width = {525}
                height = {380}
                {
                  ...isMobile? {posX: '7', posY: '90'} : { posX: 50, posY: 81, mainScale: '1'  }
                }
                img = {Journey}
                imgwidth = {320}
                imgHeight={180}
                githubLink={"https://github.com/urkkiz225/Journey"}
                alternativeButtonText={"Project Github"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "ChickenWare"
                content = "Written in Java, heavily utilizing the Minecraft source code. Programmed in 2020-2021."
                contentSideRight = "A Minecraft base game utility client modification - allows for gamescapes otherwise entirely impossible."
                width = {480}
                height = {410}
                {
                  ...isMobile? {posX: '14', posY: '165'} : { posX: 15, posY: 134, mainScale: '1'  }
                }
                img = {ChickenWare}
                imgwidth = {250}
                imgHeight = {200}
                githubLink={"https://github.com/urkkiz225/ChickenWare"}
              WindowComponentProject/>
            </div>
            <img src={cat} alt='cat' className="cat"/>
          <AppBarComponent />
          <h1 style = {{color: 'white', transform: `scale(${1.1})`, textWrap:'pretty', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px'}}>This is my portfolio page is for my code projects only! For other dabblings and witchcrafts - like art and music, refer to <a href="/gallery" style={{ color: 'red' }}>Gallery</a>.</h1>
        </span>
    </ThemeProvider>
  );
};

export default PortfolioPage;