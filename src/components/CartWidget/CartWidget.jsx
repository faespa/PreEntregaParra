import { Link } from 'react-router-dom';
 
const CartWidget = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-link d-flex align-items-center">
                <button className='btn btn-primary'><Link className="nav-link" to={"/basketShopping"}><i className="fas fa-shopping-cart fa-lg"></i></Link></button>
                <p className="m-0">0</p>
            </li>
        </ul>
    );
}

export default CartWidget;

