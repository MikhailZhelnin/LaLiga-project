import React from 'react';
import data from '../../data';
import Club from './Club/Club';
import './Clubs.scss';

const Clubs = () => {
  return (
    <section className="clubs">
      <div className="container">
        <div className="clubs__wrapper">
          <h2 className="clubs__title">Clubs</h2>
          <div className="clubs__block">
            {data.map((club) => (
              <Club key={club.id} {...club} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;
