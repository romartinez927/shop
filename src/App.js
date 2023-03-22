import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store/Store';
import ProductDetailContainer from './pages/ProductDetail/ProductDetailContainer';
import Cart from './pages/Cart/Cart';
import { CartProvider } from './storage/context';
import Home from './pages/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
          <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/collection/:collectionId" element={ <Store />} />
          <Route path="/products/:productId" element={ <ProductDetailContainer /> }/>
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
