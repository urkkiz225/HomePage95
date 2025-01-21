import React from 'react';
import WindowComponent from './WindowComponent.js';
import Wb from './WoodBoards.png';

const GalleryPage = () => {
  return (
    <span className="ms-sans-serif">
      <div style={{ padding: '20px' }}>
        <WindowComponent title = "Test" content = {Wb} icon = {Wb}/>
      </div>
    </span>
  );
};

export default GalleryPage;