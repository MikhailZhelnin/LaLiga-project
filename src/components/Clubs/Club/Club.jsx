import React from 'react';

import './Club.scss';

const Club = ({ name, logo, stadium, coach, city, foundation, website }) => {
  return (
    <article className="club">
      <header className="club__logo">
        <img className="club__logo-logo" src={logo} alt={name} />
      </header>
      <main className="club__name">
        <h4>{name}</h4>
      </main>
      <footer className="club__info">
        <h3>
          Foundation: <span>{foundation}</span>
        </h3>
        <h3>
          Coach: <span>{coach}</span>
        </h3>
        <h3>
          City: <span>{city}</span>
        </h3>
        <h3>
          Stadium: <span>{stadium}</span>
        </h3>
        <a className="club__website" href={website} target="_blanc">
          official website
        </a>
      </footer>
    </article>
  );
};

export default Club;
