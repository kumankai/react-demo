import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';

const Navbar = () => {
  const { theme } = useTheme(); // Get the theme from context

  return (
    <nav style={{
      background: theme === 'light' ? '#f8f8f8' : '#444',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: theme === 'light' ? '#000' : '#fff' }}>
        Home
      </Link>
      <Link to="/about" style={{ textDecoration: 'none', color: theme === 'light' ? '#000' : '#fff' }}>
        About
      </Link>
      <Link to="/messages" style={{ textDecoration: 'none', color: theme === 'light' ? '#000' : '#fff' }}>
        Messages
      </Link>
    </nav>
  );
};

export default Navbar;
