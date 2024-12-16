import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/redWine';
import AppBarComponent from './AppBarComponent';
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import GalleryPage from './GalleryPage';
import './style.css';

function App() {
  return (
    <ThemeProvider theme={modernDark}>
      <Router>
        <div className="App" id="App">
          <style>{styleReset}</style>
          <AppBarComponent />
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;