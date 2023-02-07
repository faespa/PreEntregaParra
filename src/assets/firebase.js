
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnm8dFcKZKXK51zN_-SFJwE_wBAOt2Hc",
  authDomain: "ecommerce-1dfcf.firebaseapp.com",
  projectId: "ecommerce-1dfcf",
  storageBucket: "ecommerce-1dfcf.appspot.com",
  messagingSenderId: "303143363351",
  appId: "1:303143363351:web:de46597e0a9d8cab1c8d52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

// /*
// C CREATE
// R READ
// U UPDATE
// D DELETE
// */


// //CRUD PRODUCTOS

const cargarBDD = async () => {
    const promise = await fetch('./json/products.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"products"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export {cargarBDD}

// const getProductos = async() => {
//     const productos = await getDocs(collection(db, "productos"))
//     const items = productos.docs.map(prod => {
//         return {...prod.data(), id: prod.id}
//     })
//     return items
// }

// const getProducto =  async (id) => {
//     const producto = await getDoc(doc(db, "productos", id))
//     const item = {...producto.data(), id: producto.id}
//     return item
// }
// // 1 o 0
// const updateProducto = async (id, info) => {
//     const estado = await updateDoc(doc(db,"productos", id), info)
//     return estado
// }

// const deleteProducto = async(id) =>{
//     const estado = await deleteDoc(doc(db, "productos", id))
//     return estado
// }


//CREATE Y READ ORDENES COMPRA

// const createOrdenCompra = async (cliente, preTotal, fecha ) => {
//     const ordenCompra = await addDoc(collection(db, "ordenCompra"),{
//         nombreCompleto: cliente.nombre,
//         email: cliente.email,
//         dni: cliente.dni,
//         direccion: cliente.direccion,
//         celular: cliente.celular,
//         fecha: fecha,
//         precioTotal: preTotal
//     })

//     return ordenCompra
// }

// const getOrdenCompra =  async (id) => {
//     const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
//     const item = {...ordenCompra.data(), id: ordenCompra.id}
//     return item
// }

// export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}