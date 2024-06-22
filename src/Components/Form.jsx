import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSpecialty = (e) => {
    setSpecialty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 0 && specialty.trim().length > 0) {
      // Agregar lógica para agregar el dentista a la lista de favoritos
      setShowSuccessMessage(true);
      setShowError(false);
    } else {
      setShowSuccessMessage(false);
      setShowError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleName} />
      </label>
      <br />
      <label>
        Especialidad:
        <input type="text" value={specialty} onChange={handleSpecialty} />
      </label>
      <br />
      <button type="submit">Agregar a favoritos</button>
      {showSuccessMessage && <p style={{ color: 'green' }}>Dentista agregado a favoritos con éxito!</p>}
      {showError && <p style={{ color: 'red' }}>Por favor, ingrese un nombre y especialidad que sean validos.</p>}
    </form>
  );
};

export default Form;