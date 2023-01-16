import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {

    const onAdd = (contador) => {
        console.log(contador)
    }


    return (
        <div className="d-flex align-items-center ">
            <div className="">
                <img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="mx-auto">
                <h3 className="card-text">Modelo: {item.modelo} </h3>
                <p className="card-text">Marca: {item.marca} </p>
                <p className="card-text">Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                <p className="card-text">Stock: {item.stock} </p>
                <ItemCount initial ={1} stock= {item.stock} onAdd={onAdd}/><br/>
                <div className="text-center ">
                    <button className="btn btn-secondary ">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;