import React from "react";

import "./Container.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div className="landing">
            <span>{greeting}</span>
        </div>
    )
}

export default ItemListContainer