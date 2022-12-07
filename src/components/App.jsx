import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import BasketShopping from './BasketShopping/BasketShopping';

const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id'element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/basketShopping' element={<BasketShopping/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;