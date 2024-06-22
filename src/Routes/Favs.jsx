// Favs.jsx
import  { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import highlightReducer from '../Reducer';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);
  const [highlightState, dispatch] = useReducer(highlightReducer, {});

  useEffect(() => {
    const storedFavs = localStorage.getItem('favs');
    if (storedFavs) {
      setFavs(JSON.parse(storedFavs));
    }
  }, []);

  const handleHighlight = (dentist) => {
    dispatch({ type: 'ADD_HIGHLIGHT', dentist });
  };

  const handleUnhighlight = (dentistId) => {
    dispatch({ type: 'REMOVE_HIGHLIGHT', dentistId });
  };

  return (
    <div className={state.theme}>
      <h1>Favoritos</h1>
      <ul>
        {favs.map((dentist) => (
          <li key={dentist.id}>
            <Card
              dentist={dentist}
              highlighted={highlightState.highlighted.includes(dentist.id)}
              onHighlight={() => handleHighlight(dentist)}
              onUnhighlight={() => handleUnhighlight(dentist.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Card = ({ dentist, highlighted, onHighlight, onUnhighlight }) => {
  return (
    <div>
      <h2>{dentist.name}</h2>
      <p>{dentist.specialty}</p>
      {highlighted ? (
        <button onClick={onUnhighlight}>Quitar destacado</button>
      ) : (
        <button onClick={onHighlight}>Destacar</button>
      )}
    </div>
  );
};

Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
  }).isRequired,
  highlighted: PropTypes.bool,
  onHighlight: PropTypes.func,
  onUnhighlight: PropTypes.func,
};

export default Favs;