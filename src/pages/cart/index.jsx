import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { CartItem, Checkout } from "../../components";
import './styles.css';
import { firebaseServices } from "../../services";
import Swal from "sweetalert2";

const { createOrder} = firebaseServices;

const ItemList = () =>  {
    const { cart, total, onRemoveItem } = useContext(CartContext);
    const [setOrderResult] = useState();
    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                shippingMethod: 'delivery',
                address: 'Calle falsa 123',
            },
            createdAt: new Date(),
            id: 1,
            items: cart,
            payment: {
                currency: 'USD',
                method: 'cash',
                type: 'cash',
            },
            seller: {
                id: 1,
                name: 'Pepito',
                phone: '123456789',
                email: 'adwda@gmail.com'
            },
            shipping: {
                deliveryDate: new Date() + 7,
                trackingNumber: '123456789',
                type: 'delivery',
            },
            total: total,
        }
        if (document.getElementById("email").value === document.getElementById("email2").value && document.getElementById("name").value !== '' && document.getElementById("phone").value !== '' && document.getElementById("email").value !==    '') {
            const result = await createOrder(newOrder);
            //setOrderResult(result);
        } else {
            Swal.fire({
                title: '¡Corrija sus datos!',
                icon: 'error',
                html:
                'Dejó un espacio en blanco o los emails no coinciden',
                showCloseButton: false,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: 'Ok',
            })
        }
        
    }

    return (
    <div className="contenedor-cart">
        <h1>Mi carrito</h1>
        <div className="cart-content">
            <br />
                {cart.length > 0 ? (
                    <>
                    {cart.map((item) => (
                        <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                    ))}
                    <h5>Ingrese sus datos:</h5>
                    <Checkout/>
                    <div className="button-container-order">
                        <button type="button" className="button-cart" onClick={onHandlerOrder}>
                            Confirmar compra
                        </button>
                    </div>
                    </> 
                ) : (
                <div>
                    <h2>&nbsp;&nbsp;&nbsp;El carrito está vacío...</h2>
                    <br />
                    <div className="button-container">
                        <Link to="/" className="button-cart">Ver productos</Link>
                    </div>
                </div>
            )}
            </div>
    </div>
    )
}

export default ItemList;