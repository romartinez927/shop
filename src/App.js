import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemsCollection from './componentes/ItemsCollection/ItemsCollection';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { CartProvider } from './storage/context';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/collection/:collectionId" element={ <ItemsCollection />} />
          <Route path="/products/:productId" element={ <ItemDetailContainer /> }/>
          <Route path="/cart" element={ <Cart /> }/>
        </Routes>
        <footer>
          footer
        </footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
