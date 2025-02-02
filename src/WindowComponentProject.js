import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import { Computer } from '@react95/icons';

const WindowComponentProject = ({ title, content, contentSideLeft, contentSideRight, img, icon, width, height, imgWidth, imgHeight, imgScale, posX, posY, githubLink, alternativeButtonText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mainScaleX, setMainScaleX] = useState(1);
  const [mainScaleY, setMainScaleY] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [useZeroPosition, setUseZeroPosition] = useState(true);
  const [mainScale, setMainScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      const isNarrowScreen = false; //fix later.
      const isMobileDevice = false; //test to see what would happen lol /*/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);*/
      setIsMobile(isNarrowScreen || isMobileDevice);
    };
    const checkIfUseZeroPosition = () => {
      setUseZeroPosition((width + 200) < window.innerWidth);
    }
    const calculatePosition = () => {
      const newX = (window.innerWidth * posX) / 100;
      const newY = (window.innerHeight * posY) / 100;
      setPosition((width + 200) < window.innerWidth ? { x: (window.innerWidth < 2000 ? (newX * (window.innerWidth / (1280 + width))) : (550 + newX * 1280 / (window.innerWidth))), y: 0.85 * newY } : { x: 0, y: newY * Math.sqrt(window.innerWidth / (width)) });
      console.log(mainScaleX);
    };

    const handleResize = () => {
      checkMobile();
      calculateScale();
      calculatePosition();
      checkIfUseZeroPosition();
    };

    const calculateScale = () => {
      const baseWidth = 1280;
      const baseHeight = 720;
      const currentWidthScale = (window.innerWidth / baseWidth);
      const currentHeightScale = (window.innerHeight / baseHeight);
      setMainScaleX(currentWidthScale);
      setMainScaleY(currentHeightScale);
      setMainScale(Math.min(currentWidthScale, currentHeightScale));
    };

    checkIfUseZeroPosition();
    checkMobile();
    calculatePosition();
    calculateScale();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [posX, posY]);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
    console.log(`pos: ${data.x}, ${data.y}`);
  };

  const openLink = () => {
    window.open(githubLink, '_blank' /*consider 404 page instead of _blank.*/);
  };

  return (
    <Draggable position={position} disabled={isMobile} onDrag={handleDrag}>
      <div>
        <Window style={{ width: width, height: height, margintop: '75', margin: 'auto', display: 'flex', flexDirection: 'column', scrollbarColor: 'red', transformOrigin: 'top', transform: `scale(${useZeroPosition ? 1.1 * Math.sqrt(mainScaleY) : window.innerWidth / (width + 200)})`, position: 'absolute' }}>
          <WindowHeader className="window-header">
            {icon ? (
              <img src={icon} alt="icon" style={{ marginRight: '8px', width: '16px', height: '16px' }} />
            ) : (
              <Computer style={{ marginRight: '8px' }} />
            )}
            {title}
          </WindowHeader>
          <WindowContent style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto', overflow: 'auto' }}>
            <div style={{ flex: '1 1 auto', overflow: 'auto', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'center', flex: '1 1 auto', overflow: 'auto', alignItems: 'center', width: '95%', marginLeft: '10px', marginRight: '10px' }}>
                {<p style={{ marginRight: '10px' }} >{contentSideLeft}</p>}
                {img && <img
                  src={img}
                  alt="alt"
                  style={{
                    width: imgWidth,
                    height: imgHeight,
                    transform: `scale(${imgScale})`,
                    display: 'block',
                    margin: '15px 0',
                    border: '2px solid white'
                  }}
                />
                }
                {<p style={{ marginLeft: '10px' }}>{contentSideRight}</p>}
              </div>
              <p style={{ marginLeft: '5px' }}>{content}</p>
              <Button variant="github" size='md' padding='20px' style={{ overflow: 'hidden', marginTop: '10px' }} onClick={openLink}>
                {alternativeButtonText ? alternativeButtonText : 'Project GitHub'}
              </Button>
            </div>
          </WindowContent>
        </Window>
      </div>
    </Draggable>
  );
};

export default WindowComponentProject;