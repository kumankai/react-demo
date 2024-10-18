import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './views/Home';
import About from './views/About';
import Messages from './views/Messages';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}/>
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
