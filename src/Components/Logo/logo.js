import React from "react";
import LogoHeader from "../../assets/logo2.PNG"
import "./logo.css"

const Logo = () => {
    return (
        <div className="logo-header">
            <img src={LogoHeader} alt="logo_header" />
        </div>
    );
};

export default Logo