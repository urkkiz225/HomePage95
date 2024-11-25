import React from 'react';
import Draggable from 'react-draggable';
import { Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import { Computer, Folder, Notepad, Camera as Eye, Close } from '@react95/icons';

const WindowComponent = ({ title, content, width, height}) => {
  return (
    <Draggable handle=".window-header">
      <div>
        <Window style={{ width: width, height: height, margin: 'auto', marginTop: 200 }}>
            <span className="ms-sans-serif">
          <WindowHeader className="window-header">
              <Computer style={{ marginRight: '8px' }} />
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
          </span>
        </Window>
      </div>
    </Draggable>
  );
};

export default WindowComponent;