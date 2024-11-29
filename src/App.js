import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
//import original from 'react95/dist/themes/original';
import modernDark from 'react95/dist/themes/redWine';
import WindowComponent from './WindowComponent';
import WindowComponentImage from './WindowComponentImage';
import AppBarComponent from './AppBarComponent';
import './style.css';
import cat from './cat.png';

function App() {
  return (
    <ThemeProvider theme={modernDark}>
      <div className="App">
        <style>{styleReset}</style>
        <div style={{ paddingTop: '50px' }}> {/* Add padding to avoid overlap */}
          <WindowComponent title="Home window" content=":3"/>
          <WindowComponent title="1984" content="No blender allowed. No violence allowed. Robots are to be validated." width = {400} height = {200}/>
          <WindowComponent title="ABG!" content="Huh?" />
          <WindowComponent title = "About me" content="Hello! \n
          test"/>
          <WindowComponentImage title = "Test" content = "Test image" img = {cat} alt = "cat"/>
          <img src={cat} alt='cat' className="center-image" />
          <AppBarComponent/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;