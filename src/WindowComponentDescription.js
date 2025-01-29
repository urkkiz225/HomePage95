import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import {Computer} from '@react95/icons';

const WindowComponentDescription = ({ title, content, icon, width, height, posX, posY }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mainScaleX, setMainScaleX] = useState(1);
  const [mainScaleY, setMainScaleY] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [useZeroPosition, setUseZeroPosition] = useState(true);
  const [mainScale, setMainScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      const isNarrowScreen = false; //fix later
      const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isNarrowScreen || isMobileDevice);
    };
    const checkIfUseZeroPosition = () => {
      setUseZeroPosition((width+200) < window.innerWidth);
    }
    const calculatePosition = () => {
      const newX = (window.innerWidth * posX) / 100;
      const newY = (window.innerHeight * posY) / 100;
      setPosition((width+200)<window.innerWidth?{ x : (window.innerWidth<2000?(newX*(window.innerWidth / 1280)):(500+newX*1280/(window.innerWidth))), y: newY*0.85}:{x:0, y : newY * Math.sqrt(window.innerWidth/(200+width))});
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

  return (
      <Draggable position={position} disabled={isMobile} onDrag={handleDrag}>
        <div>
            <Window style={{ width: width, height: height, margintop:'75', display:'flex', flexDirection:'column', scrollbarColor: 'red', transformOrigin:'top-left', transform: `scale(${useZeroPosition ? 1.1 * Math.sqrt(mainScaleY) : window.innerWidth/(width+200)})`, position: 'absolute' }}>
              <WindowHeader className="window-header">
                  {icon ? (
                    <img src={icon} alt="icon" style={{ marginRight: '8px', width: '16px', height: '16px'}} />
                  ) : (
                    <Computer style={{ marginRight: '8px' }} />
                  )}
                  <span style = {{top:'-5px'}}>{title}</span>
              </WindowHeader>
              <WindowContent style={{textAlign:'left', display: 'flex', flexDirection: 'column', flex: '1 1 auto', overflow: 'auto' }}>
                <div style={{ flex: '1 1 auto', overflow: 'auto', width: '100%' }}>
                  <p style = {{ margin: '5px' }}>{content}</p>
                </div>
              </WindowContent>
            </Window>
        </div>
      </Draggable>
  );
};

export default WindowComponentDescription;