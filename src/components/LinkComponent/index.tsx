import React from "react";
import "./LinkComponent.scss"
const LinkComponent = ({data}) => {
    return ( 
        <div className="category">
            <a className="category__link" href={data.url}>{data.name}</a>
            <span className="category__num">{data.num}</span>
        </div>
    );
}
 
export default LinkComponent;