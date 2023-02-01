import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CarContext';

const CartWidget = () => {
    const {getItemQuantity} = useCartContext()

    return (
        <>
            <button className='btn btn-primary'>
                <Link className="nav-link" to={"/cart"}>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span>}
                </Link>
            </button>
        </>
    );
}

export default CartWidget;

