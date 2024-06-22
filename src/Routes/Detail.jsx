import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentist = state.data.find(dentist => dentist.id === parseInt(id));

  return (
    <div className={state.theme}>
      <h1>Detalle del dentista</h1>
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <p>{dentist.email}</p>
      <p>{dentist.website}</p>
    </div>
  );
};

export default Detail;