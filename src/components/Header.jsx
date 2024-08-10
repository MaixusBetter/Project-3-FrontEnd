import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Subscription</li>
          <li>Search by Date</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
