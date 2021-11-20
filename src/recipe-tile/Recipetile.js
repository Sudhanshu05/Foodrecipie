import React from 'react';
import "./style.css";

function Recipetile({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|png)$/)!= null &&(
        <div className="recipeTile">
            <img 
            clasName="recipeTile_image" 
            src={recipe["recipe"]["image"] } 
            alt="title-image"
            onClick={()=>window.open(recipe["recipe"]["url"])}/>
            <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
            
        </div>
    )
        
    );
}
export default Recipetile
