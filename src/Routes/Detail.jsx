// routes/Detail.jsx
import React from 'react';
import { useState, useEffect,axios, } from 'react';
import {  useParams } from "react-router-dom"
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  useEffect(() => {
    axios.get(`https://api.example.com/dentists/${id}`)
      .then(response => {
        setDentist(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalle del dentista</h1>
      <h2>{dentist.name}</h2>
      <p>{dentist.specialty}</p>
      <p>{dentist.bio}</p>
    </div>
  );
};

export default Detail;