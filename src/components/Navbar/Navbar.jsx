import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../image/logo.svg';

import './Navbar.scss';

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
