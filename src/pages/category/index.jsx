import React from "react";
import './styles.css';
import { useParams } from 'react-router-dom';
import Card from '../../components/card';

const Category = () =>  {
    const params = useParams();  
    return (
    <div className="contenedor">
        <h1>Categoría {params.id}</h1>
    </div>
    )
}

export default Category;