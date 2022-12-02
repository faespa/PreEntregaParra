import { Link } from "react-router-dom";
import React from 'react';

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5 ">
                <a className="nav-link" href="/#">Automovil</a>
                <button className='btn btn-secondary'><Link className="nav-link" to={"/"}><i className="fas fa-home fa-lg"></i></Link></button>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="/#">Camioneta</a>
                <button className='btn btn-secondary'><Link className="nav-link" to={"/category/1"}><i className="fas fa-laptop fa-lg"></i></Link></button>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="/#">4x4</a>
                <button className='btn btn-secondary'><Link className="nav-link" to={"/category/2"}><i className="fas fa-mobile fa-lg"></i></Link></button>
            </li>
            <li className="nav-item mx-5">
                <a className="nav-link" href="/#">Accesorios</a>
                <button className='btn btn-secondary'><Link className="nav-link" to={"/category/3"}><i className="fas fa-tv fa-lg"></i></Link></button>
            </li>
        </ul>
    );
}

export default Categorias;
