import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultDB } from "../../assets/functions";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        consultDB('../json/products.json').then(productos => {
            const prod = productos.find(product => product.id === parseInt(id))
            setProducto(prod)
        })
    }, []);

    return (
        <div className="card mx-auto itemDetail">
            <ItemDetail item={producto} />
        </div>
    );
}

export default ItemDetailContainer;