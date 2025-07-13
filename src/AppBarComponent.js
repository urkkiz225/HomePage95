import React, { useEffect, useRef, useState } from 'react';
import Header from './Header.png';
import GitHubLogo256x256 from './GH-logo256x256.png';
import { AppBar, Toolbar, Button, TextInput } from 'react95';
import { useNavigate } from 'react-router-dom';


const AppBarComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isNarrowScreen = window.matchMedia('(max-width: 1000px)').matches;
      const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isNarrowScreen || isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };
  const [searchValue, setSearchValue] = useState('');
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = (e) => {
    //shitty stackoverflow solution which also doesn't work
    if (e.key === 'Enter') {
      redirectTo(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };
  return (
    <AppBar style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100 }}>
      <span className="ms-sans-serif">
        <Toolbar style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', top: '20%', position: '20%' }}>
          <div ref={navbarRef} style={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <div ref={navbarRef} style={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="menu" size="sm" style={{ fontWeight: 'bold' }} onClick={() => redirectTo('/main')}>
                Start
              </Button>
              <TextInput
                placeholder="Search..."
                width={150}
                style={{ marginLeft: 4 }}
                value={searchValue}
                onChange={handleSearchChange}
                onKeyDown={handleSearch}
              />
              </div>
              )
            }
            <Button variant="default" size="sm" style={{ marginLeft: 5, marginRight: 2 }} onClick={() => redirectTo('/main')}>
              Main Page
            </Button>
            <Button variant="default" size="sm" style={{ marginLeft: 5 }} onClick={() => redirectTo('/portfolio')}>
              Portfolio
            </Button>
            <Button variant="default" size="sm" style={{ marginLeft: 5 }} onClick={() => redirectTo('/gallery')}>
              Gallery
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <img src={Header} alt="Header" className="top-image" ref={headerRef} style = {{transform:`scale(${2})`, marginBottom: '2px'}} onClick={() => window.open('https://github.com/urkkiz225', '_blank')} />
            )}
            <div style = {{color:'white', marginRight: '13px', marginTop:'8px'}}>{!isMobile&&(`Check out my GitHub! →`) }</div>
            <button onClick={() => openLink('https://github.com/urkkiz225')} className="clear-button" style={{ marginRight: '15px', top: '50%'}}>
              <img
                src={GitHubLogo256x256}
                alt="GitHub"
                style={{ width: 40, height: 40, imageRendering: 'pixelated', marginTop: '10px' }}
              />
            </button>
          </div>
        </Toolbar>
      </span>
    </AppBar>
  );
};

export default AppBarComponent;