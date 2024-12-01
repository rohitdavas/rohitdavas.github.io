import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
