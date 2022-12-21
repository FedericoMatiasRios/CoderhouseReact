import React, { useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PRODUCTS } from '../../constants/data/products';
import Card from '../../components/card';

const Home = () =>  {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/item/${product.id}`, { state: product})
    }
    return (
        <div className="contenedor">
        <div className='products-container'>
            {PRODUCTS.map((product) => (
            <Card product={product} key={product.name} onSelect={onHandlerSelect} />
            ))}
        </div>
        </div>
    );
}

export default Home;
