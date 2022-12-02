import React from "react";
import './styles.css';

const ItemListContainer = ({children, onClose, isOpen}) => {
    return (
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={onClose} className="close-button"><i class="bi bi-x"></i></button>
            </div>
            {children}
        </div>
    )
}

export default ItemListContainer;