import React from 'react';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__wrapper">
          <h2 className="home__title">Spanish LaLiga</h2>
          <div className="home__text">
            <p>
              La Liga (Spanish Liga de Fútbol Profesional, LFP) is the name of the Spanish football
              league and has existed since 1929. Is a professional football tournament for top-level
              clubs in the Spanish football league system.
            </p>
            <p>
              La Liga is considered one of the best football leagues in the world. The first
              division is called Primera División (which is commonly referred to La Liga) and the
              second is called Segunda División. Since 1997 are 20 clubs participating in the top
              league of La Liga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
