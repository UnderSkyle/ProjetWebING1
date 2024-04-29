import './Card.css'
import image from '../assets/nourriture1.png'
import {useState} from "react";

function Card({name, id, price, stock}){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>

        <div className="card">
            <h2 className="produit">{name}</h2>
            <h4 className="ref">N° ref {id}</h4>
            <img className="card-image" src={image}/>
            <div className="grid">
                <div className="compteur-div">
                    <span className="material-symbols-outlined-card material-symbols-outlined spanr" onClick={decrement}>remove</span>
                    <p className="compt">{count}</p>
                    <span className="material-symbols-outlined-card material-symbols-outlined spanl" onClick={increment}>add</span>
                </div>
                <span className="material-symbols-outlined-card material-symbols-outlined icon" onClick={increment}>shopping_bag</span>
                <h2 className="price">{price} &euro;</h2>
            </div>
            <br/>
            <h4 className="stock">Stock : {stock}</h4>

        </div>
        </>
    )
}

export default Card