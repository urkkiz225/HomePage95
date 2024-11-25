import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import modernDark from 'react95/dist/themes/redWine';
import WindowComponent from './WindowComponent';
import './style.css';
import cat from './cat.png';

function App() {
  return (
    <ThemeProvider theme = {modernDark}>
      <div className = "App">
        <style>{styleReset}</style>
        <WindowComponent title="Home window" content=":3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3 :3\n:3 :3 :3 :3 :3 :3 :3:3 :3 :3 :3 :3 :3 :3" width='500' height='300' />
        <WindowComponent title="1984" content = "No blender allowed. No violence allowed. Robots are to be validated." />
        <WindowComponent title="ABG!" content = "Analbugs: with you since win95!" />
        <img src={cat} alt='cat' className = "bottom-image"/>;
      </div>
    </ThemeProvider>
  );
}

export default App;