import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Consult from './pages/Consult';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#2980b9',
    secondary: '#ecf0f1',
    text: '#2c3e50',
    background: '#f5f5f5',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {/* Global styles need to be inside the ThemeProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consult" element={<Consult />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
