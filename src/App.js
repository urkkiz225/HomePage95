import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import modernDark from 'react95/dist/themes/modernDark';
import MainPage from './MainPage';
import PortfolioPage from './PortfolioPage';
import GalleryPage from './GalleryPage';
import FourOFourPage from './FourOFourPage';
import './style.css';

function App() {
  return (
    <ThemeProvider theme={modernDark}>
      <Router>
        <div className="App" id="App">
          <style>{styleReset}</style>
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="*" element={<FourOFourPage />} /> 
            </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;