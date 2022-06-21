import React from "react";
import shoping_cart from "../../assets/shopping-cart.png";
import "./carrito.css";

const CartWidget = () => {
    return (
        <button className="cart-btn">
            <img src={shoping_cart} alt="Cart-icon" className="cart-widget"/>
        </button>
    )
}

export default CartWidget


