import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemsCollection from './componentes/ItemsCollection/ItemsCollection';
import { useState, useEffect } from 'react';

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/collection/:collectionId" element={ <ItemsCollection />} />
      </Routes>
      <footer>
        footer
      </footer>
    </BrowserRouter>
  );
}

export default App;
