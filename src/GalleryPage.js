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
          <h1 style = {{color:'white'}}>There doesn't seem to be anything here yet...</h1>
          <img src={cat} alt='cat' className="center-image" />
        </div>
      </span>
    </ThemeProvider>
  );
};

export default GalleryPage;