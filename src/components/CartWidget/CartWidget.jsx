import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
 
const CartWidget = () => {
    return (
       
        <ul className="navbar-nav me-auto">
            <li className="nav-link">
                <FontAwesomeIcon icon = {faCartShopping}></FontAwesomeIcon>
            </li>
            <p>0</p>
        </ul>
    
    );
}

export default CartWidget;
