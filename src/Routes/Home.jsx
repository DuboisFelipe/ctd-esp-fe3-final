import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/dentists')
      .then(response => {
        setDentists(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {dentists.map(dentist => (
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
      <Link to={`/dentista/${dentist.id}`}>Ver detalles</Link>
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

export default Home;