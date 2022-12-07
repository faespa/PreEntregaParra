import { Link } from "react-router-dom";
import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item mx-5 text-center">
                <button className='btn btn-primary'><Link className="nav-link d-flex flex-column" to={"/"}><i className="fas fa-home fa-lg mb-2"></i>AutoRines</Link></button>
            </li>
            <li className="nav-item mx-5 text-center">
                <button className='btn btn-primary'><Link className="nav-link d-flex flex-column" to={"/category/automovil"}><i className="fas fa-car fa-lg mb-2"></i>Automovil</Link></button>
            </li>
            <li className="nav-item mx-5 text-center">
                <button className='btn btn-primary'><Link className="nav-link d-flex flex-column" to={"/category/camioneta"}><i className="fas fa-truck-pickup fa-lg mb-2"></i>Camioneta</Link></button>
            </li>
            <li className="nav-item mx-5 text-center">
                <button className='btn btn-primary'><Link className="nav-link d-flex flex-column" to={"/category/offRoad"}><i className="fas fa-truck-monster fa-lg mb-2"></i>Off Road</Link></button>
            </li>
            <li className="nav-item mx-5 text-center">
                <button className='btn btn-primary'><Link className="nav-link d-flex flex-column" to={"/category/accesories"}><i className="fas fa-car-battery fa-lg mb-2"></i>Accesorios</Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
