import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setDentists(response.data);
        dispatch({ type: 'SET_DENTISTAS', payload: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAddToFavorites = (dentistId) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: dentistId });
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {dentists.map(dentist => (
          <li key={dentist.id}>
            <Card dentist={dentist} onAddToFavorites={handleAddToFavorites} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ dentist, onAddToFavorites }) => {
  return (
    <div className='card-grid'>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <Link to={`/dentista/${dentist.id}`}>Ver detalles</Link>
      <button onClick={() => onAddToFavorites(dentist.id)}>Agregar a destacados</button>
    </div>
  );
};

Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
  }).isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
};

export default Home;