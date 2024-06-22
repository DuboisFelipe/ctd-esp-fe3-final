import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext({ theme: "", data: [] });

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'SET_DATA':
      return { ...state, data: action.data };
    case 'ADD_FAV':
      return { ...state, data: [...state.data, action.fav] };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};