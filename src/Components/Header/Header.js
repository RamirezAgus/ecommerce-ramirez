import React from "react";
import logo from "../../assets/logo2.PNG"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"


const Header = () => {
 return (
    <header>
        <img src={logo} alt="Logo de MusicScope"/>
        <input id="search" type="text" className="buscador" placeholder="Buscar producto"/>
        <nav>
            <select className="categorias">
                <option>Instrumentos</option>
                <option>Amplificadores</option>
                <option>Efectos</option>
            </select>
        </nav>
        <ShoppingCartIcon color="disabled" fontSize="large" />
    </header>
 )
};

export default Header