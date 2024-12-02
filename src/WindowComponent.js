import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import { Folder, Notepad, Camera as Eye, Close, Computer} from '@react95/icons';

const WindowComponent = ({ title, content, width, height, posX, posY, icon}) => {
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

  return (
    <Draggable handle=".window-header" defaultPosition={defaultPosition}>
      <div>
        <span className="ms-sans-serif">
          <Window style={{ width: width, height: height, margin: 'auto', marginTop: 200 }}>
            <WindowHeader className="window-header">
                {icon ? ( <img src={icon} alt="icon" style={{ marginRight: '8px', width: '16px', height: '16px' }} />):
                <Computer style={{ marginRight: '8px' }} />}
                {title}
              <Button style={{ float: 'right' }}>
                <Close />
              </Button>
            </WindowHeader>
            <Toolbar>
              <Button variant="menu">
                <Folder style={{ marginRight: '4px' }} />
                File
              </Button>
              <Button variant="menu">
                <Notepad style={{ marginRight: '4px' }} />
                Edit
              </Button>
              <Button variant="menu">
                <Eye style={{ marginRight: '4px' }} />
                View
              </Button>
            </Toolbar>
            <WindowContent>
              <p>{content}</p>
            </WindowContent>
          </Window>
        </span>
      </div>
    </Draggable>
  );
};

export default WindowComponent;