import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../image/logo.svg';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/clubs">Clubs</Link>
        <Link to="/technologies">Innovation & Technology</Link>
      </nav>
    </header>
  );
};

export default Navbar;
