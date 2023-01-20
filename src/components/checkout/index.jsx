import React from "react";
import './styles.css';

const Checkout = (props) => {
    return (
        <div className="contenedor-checkout">
            <input id="name" placeholder="Nombre Apellido..." type="text" required />
            <input id="phone" placeholder="Teléfono..." type="number" required />
            <input id="email" placeholder="Email..." type="email" required />
            <input id="email2" placeholder="Repetir email..." type="email" required />
        </div>
    )
}

export default Checkout;