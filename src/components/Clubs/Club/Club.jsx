import React from 'react';
import './Club.scss';

const Club = ({ name, logo }) => {
  return (
    <article className="club">
      <header className="club__logo">
        <img className="club__logo-logo" src={logo} alt={name} />
      </header>
      <footer className="club__info">
        <h4 className="club__name">{name}</h4>
      </footer>
    </article>
  );
};

export default Club;
