import React from "react";
import "./productcard.css"
function ProductCard({id,name,manu,price,stocks,onDelete}) {
    
    return(
        <div className="card">
            <div>Name: {name}</div>
            <div>Manufacturer: {manu}</div>
            <div>Price: {price}</div>
            <div>Stocks Left: {stocks}</div>
            
            <button onClick={() => onDelete(id)} >Delete</button>
            
            
        </div>
    )
    
}

  
export default ProductCard;