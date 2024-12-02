import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/redWine';
import WindowComponent from './WindowComponent';
import WindowComponentImage from './WindowComponentImage';
import AppBarComponent from './AppBarComponent';
import './style.css';
import cat from './cat.png';
import WoodBoards from './WoodBoards.png';
import SheGotCalledCute from './shegotcalledcute....png';
import TheFuckinSourOne from './thhefuckinsourone.png';
import WindowComponentProject from './WindowComponentProject';

function App() {
  return (
    <ThemeProvider theme={modernDark}>
      <div className="App">
        <style>{styleReset}</style>
        <AppBarComponent />
        <div style={{ paddingTop: '50px' }}>
          <WindowComponent title="Home window" content=":3" posX={100} posY={100} icon={WoodBoards} />
          <WindowComponent title="1984" content="No blender allowed. No violence allowed. Robots are to be validated." width={400} height={200} posX={200} posY={200} />
          <WindowComponent title="ABG!" content="Huh?" posX={300} posY={300} />
          <WindowComponent title="About me" content="Hello! \n test" posX={400} posY={400} />
          <WindowComponentProject
            title="Test"
            content="Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow"
            contentSide="Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow Test image and more stuff to test overflow"
            img={SheGotCalledCute} alt="cat" posX={200} posY={200} width={550} height={730} imgWidth={400} imgHeight={480} githubLink={"https://urkkiz225.github.io/react/"}
          />
          <WindowComponentProject
            title="the fuckin uhh sour one"
            content="look at her go. holy shit"
            img={TheFuckinSourOne} alt="cat" posX={400} posY={200} width={550} height={650} imgWidth={400} imgHeight={480} githubLink={"https://urkkiz225.github.io/react/"}
          />
          <img src={cat} alt='cat' className="center-image" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;