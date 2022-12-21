import React, { useState } from 'react';
import { Home } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';
import Router from './router';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='contenedor'>
    <Navbar>
      <CartWidget onHandlerClick={onHandlerClick} />
    </Navbar>
    <ItemListContainer onClose={onHandlerClick} isOpen={isOpen}>
      <div className='cart-container'>
        <Link to='/cart' className='button-cart'>Ir al carrito</Link>
      </div>
    </ItemListContainer>
    <Router />
    </div>
  )
}

export default App;
