import React, {useEffect, useState, useContext} from "react";
import './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import {ItemDetail, Loader}from '../../components';
import { CartContext } from "../../context";
import { firebaseServices } from "../../services";

const { getProducts } = firebaseServices


const Category = () =>  {
    const params = useParams();  
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { products, setProducts} = useContext(CartContext);

    const onHandlerSelect = (product) => {
        navigate(`/item/${product.id}`)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 2000);

          const getData = async () => {
            try {
              setLoading(true);
              const allProducts = await getProducts();
              setProducts(allProducts);
            } catch (error) {
              console.log(error);
            }
          finally {
            setLoading(false);
          }
        }
          getData();}, [setProducts]);

    return (
        <div className="contenedor-categoria">
        {loading ? (
        <div className='loading-container'>
          <Loader />
        </div>
        ) : (
            <>
            <h1>Categoría {params.id}</h1>
            <div className='products-container'>
                {products.filter(product => product.categoryId === params.id).map((product) => (
                <ItemDetail product={product} key={product.name} onSelect={onHandlerSelect} />
                ))}
            </div>
            </>
        )}
        </div>
    );
}

export default Category;