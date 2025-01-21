import React from 'react';
import { ThemeProvider } from 'styled-components';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import './style.css';
import cat from './cat.png';

const MainPage = () => {
    return (
      <span className='ms-sans-serif'>
        <ThemeProvider theme={modernDark}>
          <div className="App" id="App">
            <div style={{ paddingTop: '130px' }}>
                <h1 style = {{color:'white'}}>There doesn't seem to be anything here yet... except this cat. mworp ≽^•⩊•^≼</h1>
              <img src={cat} alt='cat' className="center-image" />
            </div>
          </div>
        <AppBarComponent />
        </ThemeProvider>
      </span>
    );
};

export default MainPage;