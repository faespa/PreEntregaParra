import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList.jsx";
import {consultDB} from "../../assets/functions.js";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {category} = useParams();

    
    useEffect(() => {
        const catArray = ['', 'automovil', 'camioneta', 'offRoad', 'accesories'];
        if(category) {
            consultDB('../json/products.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0).filter(prod => catArray[prod.idCategoria] === category);
                console.log(category);
                const cardProductos = ItemList({productsList});
                setProducts(cardProductos);
            })
        } else {
            consultDB('./json/products.json').then(products => {
                const productsList= products.filter(prod => prod.stock > 0);
                const cardProductos = ItemList({productsList});
                setProducts(cardProductos);
            })
        }
},[category]);


    return (
        <div className = "row cardProductos">
            {products}
        </div>
    );
}

export default ItemListContainer;
