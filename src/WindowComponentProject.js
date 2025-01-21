import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import {Computer} from '@react95/icons';

const WindowComponentProject = ({ title, content, contentSideLeft, contentSideRight, img, icon, width, height, imgWidth, imgHeight, imgScale, posX, posY, githubLink, mainScale, alternativeButtonText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const calculatePosition = () => {
      const newX = (window.innerWidth * posX) / 100;
      const newY = (window.innerHeight * posY) / 100;
      setPosition({ x: newX, y: newY });
    };

    const handleResize = () => {
      calculatePosition();
    };

    window.addEventListener('resize', handleResize);
    calculatePosition();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [posX, posY]);

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const openLink = () => {
    window.open(githubLink, '_blank' /*consider 404 page instead of _blank.*/ );
  };

  return (
    <span className="ms-sans-serif">
      <Draggable position={position} onDrag={handleDrag}>
        <div>
            <Window style={{ width: width, height: height, margintop:'75', margin: 'auto', display:'flex', flexDirection:'column', scrollbarColor: 'red', transform: `scale(${mainScale})`, position: 'absolute' }}>
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
                  <div style={{ display: 'flex', justifyContent: 'center', flex: '1 1 auto', overflow: 'auto', alignItems: 'center', width: '95%', marginLeft: '10px', marginRight : '10px'}}>
                    {<p>{contentSideLeft}</p>}
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
                    {<p style = {{marginLeft: '5px'}}>{contentSideRight}</p>}
                  </div>
                  <p style = {{marginLeft: '5px'}}>{content}</p>
                  <Button variant = "github" size = 'md' padding = '20px' style = {{overflow: 'hidden', marginTop: '10px'}} onClick = {openLink}>
                    {alternativeButtonText ? alternativeButtonText : 'Project GitHub'}
                  </Button>
                </div>
              </WindowContent>
            </Window>
        </div>
      </Draggable>
    </span>
  );
};

export default WindowComponentProject;