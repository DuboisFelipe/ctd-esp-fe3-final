import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from '../src/Components/utils/global.context';
import { useReducer, useEffect } from "react";

const initialState = {
  theme: 'light',
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

function App() {
  const [theme, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    document.body.className = theme.theme;
  }, [theme]);

  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar>
          <button onClick={handleToggleTheme}>
            {theme.theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </Navbar>
        <div className={theme.theme === 'light' ? 'light' : 'dark'}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;