import React, { useEffect, useRef, useState } from 'react';
import Header from './Header.png';
import GitHubLogo256x256 from './GH-logo256x256.png';
import { AppBar, Toolbar, Button, TextInput } from 'react95';
import { useNavigate } from 'react-router-dom';

const AppBarComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Search...');
  const TheTrollingArrayWithABigTee = ['This is taking a bit longer than usual...', 'Almost done...', 'Fetching website data...', 'Fetching results...', 
    'Looking up string index table...', 'Aqcuired string index table...', 'Attempting binary search...', 
    'Fetching additional results...', 'Rerouting nodes...', 'Setting up links...', 'Connecting to the Wired...', 
    'Searching for the meaning of life...', 'Asking a friend...', 'Asking a trusted adult...', 'Asking Lain...', 'Travelling to Lisbon...', 'Arrived at Lisbon...', 'Attempting recalibration...', 
    'Recalibration successful...', 'Searching for the meaning of life again...', 'Taking a coffee break...', 'Fixing the flux capacitor (mark VII)...', 
    'Fixing the flux capacitor (mark VIII)...', 'Taking a nap...', 'Restarting computer...', 'Playing Black Sabbath...', 'Revisiting 2013...', 'Wut!! LOLZ XD check out this nyan cat gif!!', 'https://tenor.com/view/nyan-cat.gif', 
    'Where were we again? -', '- searching... or something.', '101% complete...', '*yawn*', 'heavily thinking about the results...', 'sqrt(-1)% complete...', 'Only O(1) search algorithm ever!!',
    'fetching... something... probably', 'Configuring the  HTML recursive deprecated...', 'Waiting for silksong...', 'Starting again...', 'Having an existential code snippet crisis...', 'Turning it on and off again...', 'Rebooting...', 
    'Installing FL studio...', 'Listening to 4evrx...', 'rambling...', 'uninstalling react...', 'Once upon a time...', 'In a galaxy far, far away...', 'It is a period of civil war.', 'Rebel spaceships, striking from a hidden base,', 
    'have won their first victory against the evil Galactic Empire.', 'The Empire is building a new weapon...', 'A Death Star...', 'A giant space station capable...', 'of destroying entire planets...', 'During the battle, Rebel spies managed...', 'to steal secret plans...', 
    'to the Empire\'s ultimate weapon, the Death Star.', 'Pursued by the Empire\'s sinister agents,', 'Princess Leia races home...',
     'aboard her starship,', 'custodian of the stolen plans...', 'that can save her people and restore freedom to the galaxy...', 'bzzt.', 'AppBarComponent.js...', '#piippu', 
     '5-3-4 5-3-4 5-3-4 5-3-4 5-3-4...', '10-8-9 9-8-9 10-8-9 7-5-7 9-8-9...', '10-8-9 9 10 12-10-12 14-12-12...', 'and you don\'t seem to understaaaandd....', '...', 'ugh. sure. No results.', 'Or something.', 'Whatever.', 'I\'m clocking out for today.', 'Bye!! See ya later.'];
  const [srchd, setSrchd] = useState(false);
  const [useSearchBar, setUseSearchBar] = useState(true);

  useEffect(() => {
    if (!srchd) return;
    const interval = setInterval(() => {
      setPlaceholderText(prev => {
        const curryIndex=TheTrollingArrayWithABigTee.indexOf(prev);
        if(curryIndex+1==TheTrollingArrayWithABigTee.length) {
          setSrchd(false);
          setUseSearchBar(false);
          return;
        }
        const next=curryIndex+1;
        return TheTrollingArrayWithABigTee[next];
      });
    }, Math.random()*7000+500);
    return () => clearInterval(interval);
  }, [srchd]);

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

  const handleSearch = () => {
    setSrchd(true);
    setPlaceholderText(placeholderText);
    setTypedText('');
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
              {useSearchBar && (
                <TextInput
                  placeholder={placeholderText}
                  value={typedText}
                  fullWidth={true}
                  style={{ width: 300, marginLeft: 4}}
                  onChange={(e) => setTypedText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && typedText.trim() !== '') {
                      handleSearch();
                      setPlaceholderText('Searching for'+ ` '${typedText}'...`);
                    }
                  }}
                />
              )}
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