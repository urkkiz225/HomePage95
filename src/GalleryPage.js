import React from 'react';
import AppBarComponent from './AppBarComponent';
import { ThemeProvider } from 'styled-components';
import redWine from 'react95/dist/themes/redWine';
import cat from './cat.png';

const GalleryPage = () => {
  return (
    <ThemeProvider theme={redWine}>
      <span className="ms-sans-serif">
        <AppBarComponent />
        <div style={{ paddingTop: '130px' }}>
          <h1 style={{ position: 'relative', top: '0px', minHeight: '3vh', color: 'white', transform: `scale(${1.1})`, textWrap: 'pretty', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>An evil <a href="/HomePage95/#/main" style={{ color: 'red' }}>gnome</a> seems to have eaten all the content on this page.</h1>
          <img src={cat} alt='cat' className="center-image" />
        </div>
      </span>
    </ThemeProvider>
  );
};

export default GalleryPage;