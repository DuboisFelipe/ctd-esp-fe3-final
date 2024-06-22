// Reducer.jsx
const initialState = {
    highlighted: [],
  };
  
  const highlightReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_HIGHLIGHT':
        return { ...state, highlighted: [...state.highlighted, action.dentist] };
      case 'REMOVE_HIGHLIGHT':
        return { ...state, highlighted: state.highlighted.filter((dentist) => dentist.id !== action.dentistId) };
      default:
        return state;
    }
  };
  
  export default highlightReducer;