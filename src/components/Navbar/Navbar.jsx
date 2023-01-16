import BotonDarkMode from './BotonDarkMode/BotonDarkMode'


import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

import { useDarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {

  const {darkMode} = useDarkModeContext()

  return (
  //  <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-primary' : 'bg-dark'}`}></nav>
    <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-light' : 'bg-primary'}`}>
      <div className="container-fluid">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <Categorias/>
            <CartWidget/>
            <BotonDarkMode/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;