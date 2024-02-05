import './Card.css'
import image from '../assets/nourriture1.png'
import {useState} from "react";

function Card(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    return(
        <div className="card">
            <h2 className="produit">produit</h2>
            <h4>N° ref</h4>
            <img className="card-image" src={image}/>
            <div className="compteur-div">
                <p className="compt">{count}</p>
                <button className="compt-bouton" onClick={decrement}>-</button>
                <button className="compt-bouton" onClick={increment}>+</button>
            </div>
            <img/>

            <h2>&euro;</h2>
            <h4>Stock : </h4>
        </div>
    )
}

export default Card