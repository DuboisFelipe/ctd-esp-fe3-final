// navbar.js
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/favs">Favoritos</a></li>
      </ul>
      <button onClick={() => setTheme(state.theme === 'light' ? 'dark' : 'light')}>Change theme</button>
    </nav>
  );
};

export default Navbar;