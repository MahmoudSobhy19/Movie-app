import React from 'react';
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Card = (props) => {
    return ( 
        <div className="card">
            <Link to={`/${props.id}`}>
                <div className="photo"><img src={props.image.medium} alt={props.name}></img></div>
                <p>{props.name}</p>
                <div className="rate">
                    <p>{props.rating.average}</p>
                    <div className="icon"><AiFillStar/></div>
                </div>
            </Link>
        </div> 
     );
}
 
export default Card;