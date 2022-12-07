import { Link } from "react-router-dom";
const Item = ({prod}) => {
  return (
    <>
        <div className="card border-success bg-light cardProducto ">
          <img src={`../img/${prod.img}`}className="card-img-top" alt="..." />
          <div className="card-body text-center">
              <h5 className="card-title">{prod.modelo}</h5>
              <p className="card-text">{prod.marca}</p>
              <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
              <button className='btn btn-outline-success'><Link className="nav-link" to={`/product/${prod.id}`}><i className="far fa-eye fa-lg mx-2"></i>Ver Producto</Link></button>
          </div>
        </div>
    </>
  )
}

export default Item;
