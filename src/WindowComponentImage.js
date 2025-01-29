import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import {Computer} from '@react95/icons';

const WindowComponentImage = ({ title, img, icon, width, height, imgWidth, imgHeight, imgScale, posX, posY }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mainScaleX, setMainScaleX] = useState(1);
  const [mainScaleY, setMainScaleY] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [useZeroPosition, setUseZeroPosition] = useState(true);
  const [mainScale, setMainScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      const isNarrowScreen = false; //fix or remove later.
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
    <span className="ms-sans-serif">
      <Draggable position={position} disabled={isMobile} onDrag={handleDrag}>
        <div>
            <Window style={{ width: width, height: height, margin: '2px', display:'flex', flexDirection:'column', scrollbarColor: 'red', transformOrigin:'top', transform: `scale(${useZeroPosition ? 1.1 * Math.sqrt(mainScaleY) : window.innerWidth/(width+200)})`, position: 'absolute' }}>
              <WindowHeader className="window-header">
                  {title}
              </WindowHeader>
              <WindowContent style={{ overflow:'-moz-hidden-unscrollable' }}>
                <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <div style={{ display: 'flex', justifyContent: 'center', flex: '1 1 auto', overflow: 'auto', alignItems: 'center', width: '95%', marginLeft: '2px', marginRight : '2px'}}>
                    <img
                      src={img}
                      alt="alt"
                      style={{
                        width: imgWidth,
                        height: imgHeight,
                        transform: `scale(${imgScale})`,
                        display: 'block',
                        border: '2px solid white' 
                      }}
                    />
                  </div>
                </div>
              </WindowContent>
            </Window>
        </div>
      </Draggable>
    </span>
  );
};

export default WindowComponentImage;