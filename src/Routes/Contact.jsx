import { useState } from 'react';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validaciones aquí
    if (!name || !email || !message) {
      setErrors({ message: 'Por favor, complete todos los campos' });
    } else if (name.length < 5) {
      setErrors({ message: 'El nombre debe tener al menos 5 caracteres' });
    } else {
      fetch('/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setSuccessMessage('Mensaje enviado con éxito');
        } else {
          setErrors({ message: 'Error al enviar mensaje' });
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  return (
    <div className={state.theme}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <br />
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;