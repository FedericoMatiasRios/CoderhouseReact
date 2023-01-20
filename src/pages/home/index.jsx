import React, { useEffect, useState, useContext } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
//import { PRODUCTS } from '../../constants/data/products';
import { ItemDetail, Loader, Progress } from '../../components'
import { CartContext } from "../../context";
import { firebaseServices } from "../../services";

const { getProducts } = firebaseServices

const Home = () =>  {
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { products, setProducts} = useContext(CartContext);
    const navigate = useNavigate();
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
          getData();
          
        const getDocHeight = () => {
            return Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight,

            )
        }
        const calculateScrollDistance = () => {
            const scrollTop  = window.pageYOffset;
            const winHeight = window.innerHeight;
            const docHeight = getDocHeight();
            const totalDocScrollLenght = docHeight - winHeight;

            const scrollPosition = Math.floor(scrollTop / totalDocScrollLenght * 100);
            setScrollPosition(scrollPosition);
        }
        const handleScroll = (event) => {
        requestAnimationFrame(() => {
            calculateScrollDistance();
            });
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [setProducts]);

    return (
        <div className="contenedor-home">
        <Progress scroll={scrollPosition} /> 
        {loading ? (
        <div className='loading-container'>
          <Loader />
        </div>
        ) : (
            <>
            <h1>Productos destacados</h1>
            <div className='products-container'>
            {products.map((product) => (
                <ItemDetail product={product} key={product.id} onSelect={onHandlerSelect}/>
            ))}
            </div>
            </>
        )}
        </div>
    );
}

export default Home;