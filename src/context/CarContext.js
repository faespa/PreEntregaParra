import { useState, createContext, useContext } from "react";

const cartContext = createContext();

export const useCartContext = () => useContext(cartContext)

export const cartProvider = (props) => {
    const [cart, setCar] = useState([]);

    const isInCart = (id) => {
        
        return cart.find(producto => producto.id === id);
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id);
            const aux = [...cart]; 
            aux[indice].cant = cantidad;
        } else {
            const newProduct = {
                ...producto,
                cant = cantidad
            }
            setCar([...cart, newProduct]);
        }
    }
}
