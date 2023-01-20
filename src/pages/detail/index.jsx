import React, {useEffect, useState, useContext} from "react";
import './styles.css';
import { Link, useParams } from "react-router-dom";
import {ItemDetail, Loader}from '../../components';
import { CartContext } from '../../context';
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { firebaseServices } from "../../services";

const { getProductById } = firebaseServices;

const ItemDetailContainer = () =>  {
    const [product, setProduct] = useState(null);
    const { id } = useParams() || {};
    const { onDecreaseItem, onIncreaseItem, getItemQuantity, products, setProducts} = useContext(CartContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
          }, 10000);

        getProductById(id)
        .then((product) => {
            setProduct(product[0]);
            setLoading(false);
            })
    }, [id])

    useEffect(() => {
        if(products.length === 0) {
            const db = getFirestore();
            const q = query(
                collection(db, 'products'), 
                );
            getDocs(q)
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        setProducts((prev) => [...prev, doc.data()])
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [products.length, setProducts])

    const [setScrollPosition] = useState(0);
    useEffect(() => {
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
    }, [setScrollPosition])
    
    return (
    <div className="contenedor-detalle">
        {loading ? (
        <div className='loading-container'>
          <Loader />
        </div>
        ) : (
            <>
            {product ? (
            <ItemDetail 
                product={product} 
                key={product?.name} 
                onSelect={() => {}} type='mCard' 
                decreaseQty = {onDecreaseItem}
                increaseQty = {onIncreaseItem}
                numberOfItem = {getItemQuantity(product?.id)}/>
            ) : <Link to="/" className="button-cart">Ir al inicio</Link>}
            </>
        )}
    </div>
    )
}

export default ItemDetailContainer;