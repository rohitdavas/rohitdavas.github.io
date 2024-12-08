import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Wrapper component to track page views
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview', 
      page: location.pathname
    });
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize('G-S0WE9752CD');
  }, []);

  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <RouteTracker /> {/* Add route tracking */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;