import React, { useEffect, useRef, useState } from 'react';
import Header from './Header.png';
import GitHubLogo256x256 from './GH-logo256x256.png';
import { AppBar, Toolbar, Button, TextInput } from 'react95';
import { useNavigate } from 'react-router-dom';


const AppBarComponent = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const checkOverlap = () => {
      if (headerRef.current && navbarRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        const isOverlap = headerRect.left < navbarRect.right + 10;
        setHideHeader(isOverlap);
      }
    };

    window.addEventListener('resize', checkOverlap);
    checkOverlap();

    return () => {
      window.removeEventListener('resize', checkOverlap);
    };
  }, []);

  const openLink = (link) => {
    window.open(link, '_blank');
  };

  const navigate = useNavigate();

  const redirectTo = (path) => {
    navigate(path);
  };

  return (
    <AppBar style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100 }}>
      <span className="ms-sans-serif">
        <Toolbar style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center', top: '20%', position: '20%' }}>
          <div ref={navbarRef} style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="menu" size="sm" style={{ fontWeight: 'bold' }} onClick={() => redirectTo('/main')}>
              Start
            </Button>
            <TextInput
              placeholder="Search..."
              width={150}
              style={{ marginLeft: 4}}
            />
            <Button variant="menu" size="sm" style={{ marginLeft: 4 }} onClick={() => redirectTo('/main')}>
              Main Page
            </Button>
            <Button variant="menu" size="sm" style={{ marginLeft: 4 }} onClick={() => redirectTo('/portfolio')}>
              Portfolio
            </Button>
            <Button variant="menu" size="sm" style={{ marginLeft: 4 }} onClick={() => redirectTo('/gallery')}>
              Gallery
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {!hideHeader && (
              <img src={Header} alt="Header" className="top-image" ref={headerRef} />
            )}
            <button onClick={() => openLink('https://github.com/urkkiz225')} className="clear-button" style={{ marginRight: '10px', top: '50%' }}>
              <img
                src={GitHubLogo256x256}
                alt="GitHub"
                style={{ width: 40, height: 40, imageRendering: 'pixelated' }}
              />
            </button>
          </div>
        </Toolbar>
      </span>
    </AppBar>
  );
};

export default AppBarComponent;