import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/#">Auto<span>Rines</span></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Categorias/>
            <CartWidget/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;