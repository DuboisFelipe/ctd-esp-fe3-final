import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favs');
    if (storedFavs) {
      setFavs(JSON.parse(storedFavs));
    }
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favs.map(dentist => (
          <li key={dentist.id}>
            <Card dentist={dentist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ dentist }) => {
  return (
    <div>
      <h2>{dentist.name}</h2>
      <p>{dentist.specialty}</p>
    </div>
  );
};

Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
  }).isRequired,
};

export default Favs;