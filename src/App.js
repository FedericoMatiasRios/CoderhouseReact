import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar';
import CartWidget from './components/cartWidget';
import ItemListContainer from './components/itemListContainer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onHandlerClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Navbar>
        <CartWidget onHandlerClick={onHandlerClick} />
      </Navbar>
      <ItemListContainer onClose={onHandlerClick} isOpen={isOpen}>
        <h5>Item List</h5>
      </ItemListContainer>
    </div>
  );
}

export default App;
