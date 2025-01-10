import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import WindowComponentDescription from './WindowComponentDescription';
import WindowComponentProject from './WindowComponentProject';
import './style.css';
import cat from './cat.png';
import Kesasim from './ProjectHeaders/Kesasim.png';
import BRUTALMANIA from './ProjectHeaders/BRUTALMANIA.jpg';
import WindowComponent from './WindowComponent';

const MainPage = () => {
    return (
        <ThemeProvider theme={modernDark}>
          <div className="App" id="App">
            <style>{styleReset}</style>
            <div style={{ paddingTop: '50px' }} className = {'.App'}>
              <WindowComponentProject
                title = "Brutalmania"
                content = "THIS! IS! BRUTALMANIA!!!"
                contentSide = "HAIL BRUTE! Welcome to Brutalmania! AN endless fight for life, gold and splendor at the bloody arena. Show your enemies your strength and ruhtlessness. Have no mercy! Dare to reach for power! Collect gold, improve yourself and your gear, fight again and again!"
                width = {500}
                height = {500}
                posX = {20}
                posY = {30}
                img = {BRUTALMANIA}
                imgWidth={320}
                imgHeight={280}
                githubLink={"https://brutalmania.io/?v=1.2.63"}
              />
              <WindowComponentProject
                title = "Kesäsimulaattori"
                content = "An ages old project, made in Unity 2020.1.1f1, HDRP utilized and C# typed all the way through. Contains light shaderwork in the mix."
                contentSideRight = "A certified Finnish summer experience - down to the finite details. A passion project for a while - before the inevitablility of it all pushed towards new winds."
                width = {500}
                height = {400}
                posX = {40}
                posY = {40}
                img = {Kesasim}
                imgwidth = {320}
                imgHeight={180}
                githubLink={"https://github.com/urkkiz225/kesasimulaattori"}
                WindowComponentProject/>
              <img src={cat} alt='cat' className="center-image" />
            </div>
            <AppBarComponent />
          </div>
          <script src="https://unpkg.com/webamp">
            <script>
              const webamp = new Webamp();
              webamp.renderWhenReady(App);
            </script>
          </script>
        </ThemeProvider>
      );
};

export default MainPage;