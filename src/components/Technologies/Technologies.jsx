import React from 'react';
import './Technologies.scss';
import camera from '../../image/camera.jpg';

const Technologies = () => {
  return (
    <section className="technologies">
      <div className="container">
        <div className="technologies__wrapper">
          <h2 className="technologies__title">Technologies</h2>
          <div className="technologies__img">
            <img className="technologies__img-img" src={camera} alt="Camera" />
          </div>
          <div className="technologies__text">
            <p>
              Innovation and technology currently represent one of the cornerstones of LaLiga's
              medium- and long-term growth.
            </p>
            <p>
              The clubs' association boasts a digital ecosystem that combines channels, services and
              data. The combination of these elements provides LaLiga with a complete overview,
              which the organisation uses to improve its audiovisual product for the benefit of
              supporters, sponsors, broadcasters and, of course, the clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
