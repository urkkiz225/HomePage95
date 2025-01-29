import React from 'react';
import { ThemeProvider } from 'styled-components';
import modernDark from 'react95/dist/themes/redWine';
import './style.css';
import { Button } from 'react95';
import { useNavigate } from 'react-router-dom';


const FourOfourPage = () => {
  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };
    return (
      <span className='ms-sans-serif'>
        <div style = {{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', flexDirection:'column', backgroundColor:'black'}} >
          <h1 style = {{color:'white'}}>Ha! You thought.</h1>
          <ThemeProvider theme={modernDark}>
              <Button variant="default" size="sm" style={{transform: `scale(${1})`,}} onClick={() => redirectTo('/portfolio')}>
                  Go back
              </Button>
          </ThemeProvider>
        </div>
      </span>
    );
};

export default FourOfourPage;