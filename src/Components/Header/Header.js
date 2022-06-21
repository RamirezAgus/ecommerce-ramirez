import React from "react";
import "./Header.css"
import Logo from "../../Components/Logo/logo";
import CartWidget from "../CartWidget/carrito";


const Header = () => {
 return (
    <header>
            <Logo />
        <input id="search" type="text" className="buscador" placeholder="Buscar producto"/>
        <nav>
            <select className="categorias">
                <option>Instrumentos</option>
                <option>Amplificadores</option>
                <option>Efectos</option>
            </select>
        </nav>
        <CartWidget />
    </header>
 )
};

export default Header