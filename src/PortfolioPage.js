import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import redWine from 'react95/dist/themes/redWine';
import counterStrike from 'react95/dist/themes/counterStrike'
import azureOrange from 'react95/dist/themes/azureOrange'
import AppBarComponent from './AppBarComponent';
import WindowComponentProject from './WindowComponentProject';
import './style.css';
import cat from './cat.png';
import Kesasim from './ProjectHeaders/Kesasim.png';
import Journey from './ProjectHeaders/Journey.png';
import ChickenWare from './ProjectHeaders/ChickenWare.png';
import PolygxnUtils from './ProjectHeaders/PolygxnUtils.png';
import HomePage95 from './ProjectHeaders/HomePage95.png';
import ComScienceRepo from './ProjectHeaders/ComScienceRepo.png';

const PortfolioPage = () => {
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
    <ThemeProvider theme={redWine}>
      <span className="ms-sans-serif">
        <div style={{ paddingTop: `${130*mainScale}px`}}>
            <WindowComponentProject
                title = "Kesäsimulaattori"
                content = "An open world exploration game, made in Unity 2020.1.1f1, HDRP utilized and C# typed all the way through. Contains light shaderwork in the mix, like compute gerstner wave shaders."
                contentSideRight = "A certified Finnish summer experience - down to the finite details. A passion project for a while - before the inevitablility of it all pushed towards new winds. Release on GitHub is outdated."
                width = {600}
                height = {420}
                posX={50}
                posY={75}
                img = {Kesasim}
                imgwidth = {320}
                imgHeight={180}
                githubLink={"https://github.com/urkkiz225/kesasimulaattori"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "Journey"
                contentSideLeft = "An horror game-esque high-fidelity audiovisual demo - key points are sound and environment design."
                content = "Made utilizing HDRP and the Unity game engine."
                width = {525}
                height = {380}
                posX={15}
                posY={134}
                img = {Journey}
                imgwidth = {320}
                imgHeight={180}
                githubLink={"https://github.com/urkkiz225/Journey"}
                alternativeButtonText={"Project Github"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "ChickenWare"
                content = "Written in Java, heavily utilizing the Minecraft source code."
                contentSideRight = "A Minecraft base game utility client modification - allows for gamescapes otherwise entirely impossible."
                width = {480}
                height = {410}
                posX={55}
                posY={195}
                img = {ChickenWare}
                imgwidth = {250}
                imgHeight = {200}
                githubLink={"https://github.com/urkkiz225/ChickenWare"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "PolygxnUtils"
                content = "A command-documented program that allows for the creation, manipulation and transformation of polygons - along with layered functionality."
                contentSideLeft = "Written in Java for a computer science course - comes with a custom command line interface, and a graphical user interface utulizing Java AWT."
                width = {600}
                height = {390}
                posX={10}
                posY={260}
                img = {PolygxnUtils}
                imgwidth = {320}
                imgHeight = {180}
                githubLink={"https://github.com/urkkiz225/PointPolygonUtils"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "HomePage95"
                content = "You are here."
                width = {530}
                height = {420}
                posX={14}
                posY={2}
                img = {HomePage95}
                imgwidth = {416}
                imgHeight = {234}
                alternativeButtonText={"GitHub"}
                githubLink={"https://github.com/urkkiz225/HomePage95"}
              WindowComponentProject/>
              <WindowComponentProject
                title = "Custom function parameter parser"
                contentSideRight = "A custom parameter parser voluntarily made for a computer science course. Written in Java."
                content = "Allows for the execution of any of the given exercises in the course materials - with a custom command line interface. Utilizes the java.beans library for string to any datatype parsing."
                width = {590}
                height = {470}
                posX={45}
                posY={320}
                img = {ComScienceRepo}
                imgwidth = {416}
                imgHeight = {234}
                githubLink={"https://github.com/urkkiz225/COMscienceRepo"}
              WindowComponentProject/>
            </div>
            {!isMobile ? (
              <div>
                <img src={cat} style={{ position: 'absolute', bottom: `${-1670 * mainScale}px` }} alt='cat' className="cat" />
              </div>
            ):(
              <div>
              </div>
            )}
          <AppBarComponent />
        </span>
    </ThemeProvider>
  );
};

export default PortfolioPage;