import  { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const [isFavorite, setIsFavorite] = useState(state.favorites.includes(dentist.id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', id: dentist.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', id: dentist.id });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/detail/${dentist.id}`} className="w-60 flex gap-4 flex-col bg-white border-[1px]">
      <div className="flex flex-col gap-2">
        <img className="w-60" src="./images/doctor.jpg" alt="" />
        <div className="flex px-2 flex-col gap-0">
          <h3>{dentist.name}</h3>
          <p className="text-gray-400 text-sm">{dentist.username}</p>
        </div>
      </div>
      <button
        onClick={handleToggleFavorite}
        className="w-full hover:text-white hover:bg-[#666666] py-2 bg-gray-200"
      >
        {isFavorite ? 'Remove favorite' : 'Add to favorites'}
      </button>
    </Link>
  );
};

export default Card;