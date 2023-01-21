import { Link } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCartContext } from "../../context/CarContext";
const Cart = () => {
  const {darkMode} = useDarkModeContext();
  const {cart, emptyCart, totalPrice, removeItem} = useCartContext();
  return (
    <>
      {cart.lenght === 0 ? 
      <>
        <h1>Empty Basket</h1>
        <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link to={'/'}>Continuar Compra</Link></button>
      </>
      :
      <div className="container 'cartConainer">
        {
          cart.map(prod => 
            <div className={`card mb-3 ${darkMode ? 'text-white bg-secondary' : 'border-light'}`} key={prod.id} style={{maxWidth: '540px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`../img/${prod.img}`} alt="Producto" className="img-fluid rounded-start"/>
                </div>
              </div>
              <div className="col-md-8">
                <div className="cardBody">
                  <h5 className="card-title">{`${prod.nombre} ${prod.marca}`}</h5>
                  <p className="card-text">Quantity: {prod.cant}</p>
                  <p className="card-text">price Each Item: {Intl.NumberFormat('de-De').format(prod.precio)}</p>
                  <p className="card-text">Total: {Intl.NumberFormat('de-De').format(prod.precio * prod.cant)}</p>
                </div>
                <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>Clean Basket</button>
              </div>
            </div>
            )
        }

        <div>
          <p>Price all Item in Basket ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
          <button className="btn btn-danger" onClick={emptyCart}>Clean Basket</button>
          <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link to={'/checkout'}>continue buying</Link></button>
          <button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'}`}><Link to={'/checkout'}>Finish buy</Link></button>
        </div>
      </div>
      }
    </>
  );
}

export default Cart;