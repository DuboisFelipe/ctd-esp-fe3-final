const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchData;

// Lógica de estado
export const initialState = { theme: "", data: [] };

export const reducer = (state, action) => {
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