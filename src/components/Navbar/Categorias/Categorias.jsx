import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5 ">
                <a className="nav-link" href="#">Automovil</a>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="#">Camioneta</a>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="#">4x4</a>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="#">Accesorios</a>
            </li>
        </ul>
    );
}

export default Categorias;
