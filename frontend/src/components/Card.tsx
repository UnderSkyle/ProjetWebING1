import './Card.css'
import '../assets/'
import {useState} from "react";

function Card(){
    return(
        <div className="card">
            <h2 className="produit">produit</h2>
            <h4>N° ref</h4>
            <img className="card-image" src=""/>
            <div className="compteur">
                

            </div>
            <img/>
            <h2>&euro;</h2>
            <h4>Stock : </h4>
        </div>
    )
}

export default Card