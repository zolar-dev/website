import React from 'react';
import planetJavascript from '../../images/javascript.png';
import planetPython from '../../images/python.png';
import  '../../../SolarSystemStyle.css';
// importar imágenes para otros planetas

const SolarSystem = () => {
  const planets = [
    { name: 'JavaScript', image: planetJavascript, className: 'javascript' },
    { name: 'Python', image: planetPython, className: 'python' },
    // información para otros planetas
  ];

  return (
    <div className="solar-system">
      {planets.map((planet, index) => (
        <Planet key={index} name={planet.name} image={planet.image} className={planet.className} />
      ))}
      <div className="sun"></div>
    </div>
  );
};

const Planet = ({ name, image, className }) => {
    return (
      <div className={className}>
        <img className="planet-img" src={image} alt={name} />
        <div className="planet-name">{name}</div>
      </div>
    );
  };
  

export default SolarSystem;