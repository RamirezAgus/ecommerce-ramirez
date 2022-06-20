import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"
import Logo from "../../Components/Logo/logo";


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
        <ShoppingCartIcon color="disabled" fontSize="large" />
    </header>
 )
};

export default Header