import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"these are items"}/>
    </>
  );
}


export default App;