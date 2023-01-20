import React, { useState } from 'react';
import NavBar from './components/navbar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';
import Router from './router';
import './App.css';
import { CartProvider } from './context';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='contenedor'>
    <CartProvider>
    <NavBar>
      <CartWidget onHandlerClick={onHandlerClick} />
    </NavBar>
    <ItemListContainer onClose={onHandlerClick} isOpen={isOpen}/>
    <Router />
    </CartProvider>
    </div>
  )
}

export default App;
