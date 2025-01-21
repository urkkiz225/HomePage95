import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/modernDark';
import redWine from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import WindowComponentDescription from './WindowComponentDescription';
import WindowComponentProject from './WindowComponentProject';
import './style.css';
import cat from './cat.png';
import Kesasim from './ProjectHeaders/Kesasim.png';
import BRUTALMANIA from './ProjectHeaders/BRUTALMANIA.jpg';
import Journey from './ProjectHeaders/Journey.png';
import WindowComponent from './WindowComponent';

const PortfolioPage = () => {
  return (
    
    <ThemeProvider theme={redWine}>
        <div style={{ paddingTop: '120px' }}>

          <WindowComponentProject
            title = "Brutalmania"
            content = "THIS! IS! BRUTALMANIA!!!"
            contentSide = "HAIL BRUTE! Welcome to Brutalmania! AN endless fight for life, gold and splendor at the bloody arena. Show your enemies your strength and ruhtlessness. Have no mercy! Dare to reach for power! Collect gold, improve yourself and your gear, fight again and again!"
            width = {500}
            height = {500}
            posX = {10}
            posY = {0}
            img = {BRUTALMANIA}
            imgWidth={320}
            imgHeight={280}
            githubLink={"https://brutalmania.io/?v=1.2.63"}
          />
          <WindowComponentProject
            title = "Kesäsimulaattori"
            content = "An ages old project, made in Unity 2020.1.1f1, HDRP utilized and C# typed all the way through. Contains light shaderwork in the mix."
            contentSideRight = "A certified Finnish summer experience - down to the finite details. A passion project for a while - before the inevitablility of it all pushed towards new winds."
            width = {530}
            height = {420}
            posX = {50}
            posY = {70}
            img = {Kesasim}
            imgwidth = {320}
            imgHeight={180}
            githubLink={"https://github.com/urkkiz225/kesasimulaattori"}
            WindowComponentProject/>
            <WindowComponentProject
            title = "Journey"
            contentSideLeft = "An old horror game-esque high-fidelity audiovisual demo - key points are sound and environment design."
            content = "Made utilizing HDRP and the Unity game engine."
            width = {500}
            height = {380}
            posX = {5}
            posY = {95}
            img = {Journey}
            imgwidth = {320}
            imgHeight={180}
            githubLink={"https://github.com/urkkiz225/Journey"}
            alternativeButtonText={"Project Github"}
            WindowComponentProject/>
          </div>
          <img src={cat} alt='cat' className="cat"/>
        <AppBarComponent />
    </ThemeProvider>
  );
};

export default PortfolioPage;