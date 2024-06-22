import { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../utils/Api';

const initialState = {
  theme: 'light', 
  data: [],
  highlighted: [],
  favs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'SET_DATA':
      return { ...state, data: action.data };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.fav] };
    case 'ADD_HIGHLIGHT':
      return { ...state, highlighted: [...state.highlighted, action.dentist] };
    case 'REMOVE_HIGHLIGHT':
      return { ...state, highlighted: state.highlighted.filter((dentist) => dentist.id !== action.dentistId) };
    default:
      return state;
  }
};

const ContextGlobal = createContext({ theme: "", data: [], highlighted: [], favs: [] });

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData().then((data) => {
      dispatch({ type: 'SET_DATA', data });
    });
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', theme });
  };

  const addFav = (fav) => {
    dispatch({ type: 'ADD_FAV', fav });
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, setTheme, addFav }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export { ContextProvider, ContextGlobal };