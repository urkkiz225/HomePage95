import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import {Computer} from '@react95/icons';

const WindowComponentProject = ({ title, content, contentSide, img, icon, width, height, imgWidth, imgHeight, imgScale, posX, posY, githubLink }) => {
  const [defaultPosition, setDefaultPosition] = useState({ x: posX, y: posY });

  useEffect(() => {
    const handleResize = () => {
      const newX = window.innerWidth < 800 ? window.innerWidth * 0.5 : defaultPosition.x;
      const newY = window.innerHeight < 600 ? window.innerHeight * 0.5 : defaultPosition.y;
      setDefaultPosition({ x: newX, y: newY });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultPosition.x, defaultPosition.y]);
  
  const openLink = () => {
    window.open(githubLink, '_blank' /*consider 404 page instead of _blank.*/ );
  };

  return (
    <Draggable handle=".window-header" defaultPosition={defaultPosition}>
      <div>
        <span className="ms-sans-serif">
          <Window style={{ width: width, height: height, margin: 'auto', marginTop: 200 }}>
            <WindowHeader className="window-header">
                {icon ? (
                  <img src={icon} alt="icon" style={{ marginRight: '8px', width: '16px', height: '16px' }} />
                ) : (
                  <Computer style={{ marginRight: '8px' }} />
                )}
                {title}
            </WindowHeader>
            <WindowContent style={{ display: 'flex', flexDirection: 'column', padding: '10px', overflow: 'hidden' }}>
              <div style={{ flex: '1 1 auto', overflow: 'auto', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: "space-evenly", alignItems: 'center', width: '100%'}}>
                  <img
                    src={img}
                    alt="alt"
                    style={{
                      width: imgWidth,
                      height: imgHeight,
                      transform: `scale(${imgScale})`,
                      display: 'block',
                      margin: '20px 0'
                    }}
                  />
                  {<p>{contentSide}</p>}
                </div>
                <p>{content}</p>
                <Button variant = "github" size = 'md' padding = '20px' onClick = {openLink}>
                  Project Github
                </Button>
              </div>
            </WindowContent>
          </Window>
        </span>
      </div>
    </Draggable>
  );
};

export default WindowComponentProject;