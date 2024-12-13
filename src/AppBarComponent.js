import React from 'react';
import Header from './Header.png';
import GitHubLogo256x256 from './GH-logo256x256.png';
import { AppBar, Toolbar, Button, TextInput } from 'react95';
import { IoColorFill } from 'react-icons/io5';

const AppBarComponent = () => {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <AppBar style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 110,display: 'flex' }}>
      <Toolbar style={{ justifyContent: 'space-between',display:'flow', top: '10%' }}>
        <span className="ms-sans-serif">
          <div style={{ display: 'flex', top: '50%'}}>
            <Button variant="menu" size="sm" style={{ fontWeight: 'bold'}}>
              Start
            </Button>
            <TextInput
              placeholder="Search..."
              width={150}
              style={{ marginLeft: 4 }}
            />
            <Button variant = "Main page" size = 'md' padding = '20px' style = {{overflow: 'hidden', marginLeft: '5px'}} onClick = {openLink}>
              Main page
            </Button>
            <img src={Header} alt="Header" className='top-image' />
          </div>
        </span>
        <div buttons style={{ display: 'flex', position: 'absolute', top: '50%', left: '93%'}}>
          {
            <button onClick={() => openLink("https://github.com/urkkiz225")} className="clear-button">
              <img src={GitHubLogo256x256} alt="GitHub" style={{ width: 40, height: 40, imageRendering: 'pixelated', filter: IoColorFill(244,0,224)}} />
            </button>
          }
          
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;