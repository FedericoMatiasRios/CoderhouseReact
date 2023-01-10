import React from "react";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/card';
import { PRODUCTS } from '../../constants/data/products';

const Category = () =>  {
    const params = useParams();  
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/item/${product.id}`, { state: product})
    }
    return (
        <div className="contenedor">
            <h1>Categoría {params.id}</h1>
        <div className='products-container'>
            {PRODUCTS.filter(product => product.categoryId == params.id).map((product) => (
            <Card product={product} key={product.name} onSelect={onHandlerSelect} />
            ))}
        </div>
        </div>
    );
}

export default Category;