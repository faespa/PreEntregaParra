import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        
        return cart.find(producto => producto.id === id);
    }

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) {
            const indice = cart.findIndex(prod => prod.id === producto.id);
            const aux = [...cart]; 
            aux[indice].cant = cantidad;
            setCart(aux)
        } else {
            const newProduct = {
                ...producto,
                cant : cantidad
            }
            setCart([...cart, newProduct]);
        }

        const emptyCart =() => {
            setCart([])
        }

        const removeItem = (id) => {
            // const aux = [...carrito];
            // const inidie = aux.findIndex(prod => prod.id ==id);
            // setCar(aux.splice(indice,1));
            setCart(cart.filter(prod => prod.id !== id));
        }

        const getItemQuantity = () => {
            return cart.reduce((acum, prod) => acum += prod.cant, 0);    
        }

        const totalPrice = () => {
            return cart.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0);
        }

        return (
            <CartContext.Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
                {props.children}
            </CartContext.Provider>
        )
    }
}
