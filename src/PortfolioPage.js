import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import WindowComponentDescription from './WindowComponentDescription';
import './style.css';
import cat from './cat.png';

const MainPage = () => {
    return (
        <ThemeProvider theme={modernDark}>
          <div className="App" id="App">
            <style>{styleReset}</style>
            <div style={{ paddingTop: '50px' }}>
              <WindowComponentDescription
                title="About me"
                content="fake"
                posX={20}
                posY={20}
                height={200}
              />
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