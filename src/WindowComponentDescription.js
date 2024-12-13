import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import { Folder, Notepad, Camera as Eye, Close } from '@react95/icons';

const WindowComponentDescription = ({ title, content, width, height, posX, posY, icon }) => {
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

  return (
    <span className='ms-sans-serif'>
      <Draggable position={position} onDrag={handleDrag}>
        <div style={{ position: 'absolute' }}>
          <Window style={{ width: width || 300, height: height || 200 }}>
            <WindowHeader>
              <span>
                {icon && <img src={icon} alt="icon" style={{ marginRight: '8px' }} />}
                {title}
              </span>
              <Button style={{ float: 'right' }}>
                <Close />
              </Button>
            </WindowHeader>
            <WindowContent>
              <p>{content}</p>
            </WindowContent>
          </Window>
        </div>
      </Draggable>
    </span>
  );
};

export default WindowComponentDescription;