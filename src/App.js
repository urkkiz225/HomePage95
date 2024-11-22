import React from 'react';
import { ThemeProvider } from 'styled-components';
import { styleReset, Window, WindowHeader, WindowContent, Button, Toolbar } from 'react95';
import { Computer, Folder, Notepad, Camera as Eye, Close } from '@react95/icons';
import original from 'react95/dist/themes/original';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={original}>
      <div className="App">
        <style>{styleReset}</style>
        <Window style={{ width: 300, margin: 'auto', marginTop: '50px' }}>
          <WindowHeader>
            <span>
              <Computer style={{ marginRight: '8px' }} />
              Main window
            </span>
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
            <p>
              <Computer style={{ marginRight: '8px' }} />
              Does this shit even work?
            </p>
          </WindowContent>
        </Window>
      </div>
    </ThemeProvider>
  );
}

export default App;