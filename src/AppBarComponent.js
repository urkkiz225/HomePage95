import React from 'react';
import { AppBar, Toolbar, Button, TextInput } from 'react95';

const AppBarComponent = () => {
  return (
    <AppBar style={{ position: 'absolute', top: 0, left: 0, right: 0, height : 100}}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <span className="ms-sans-serif">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="menu" size="sm" style={{ fontWeight: 'bold' }}>
            Start
          </Button>
          <TextInput
            placeholder="Search..."
            width={150}
            style={{ marginLeft: 4 }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="menu" size="sm">
            Home
          </Button>
          <Button variant="menu" size="sm">
            About
          </Button>
          <Button variant="menu" size="sm">
            Contact
          </Button>
        </div>
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;