import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../image/logo.svg';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-logo" src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        <Link className="header__nav-link" to="/">
          Home
        </Link>
        <Link className="header__nav-link" to="/technologies">
          Technologies
        </Link>
        <Link className="header__nav-link" to="/clubs">
          Clubs
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
