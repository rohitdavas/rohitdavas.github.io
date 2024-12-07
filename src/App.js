import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Redirect component to handle GitHub Pages redirect
const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect);
    }
  }, [navigate]);
  
  return null;
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RedirectHandler />
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
