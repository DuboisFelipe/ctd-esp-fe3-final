// routes/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validaciones aquí
    if (!name || !email || !message) {
      setErrors({ message: 'Por favor, complete todos los campos' });
    } else {
      // Enviar formulario aquí
      console.log('Formulario enviado');
    }
  };

  return (
    <div>
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;