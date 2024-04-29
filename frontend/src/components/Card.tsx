import './Card.css'
import {useState} from "react";
import React from "react";


function Card({name, id, price, stock, img}){
    const [count, setCount] = useState(0);
    const imagePath = "src/assets/" + img
    console.log(img)
    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        var user = localStorage.getItem("user");
        if (user!=null){
            const data = {
                id_user: user,
                quantity: count,
                ref_product: id
            };
            const apiUrl = 'http://127.0.0.1:8000/posts/addToCart/';
            const requestOptions = {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            };
            
            fetch(apiUrl, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                        //afficher une erreur sur la page
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Success");
                })
                .catch(err => {
                console.log(err.message);
                });
        }else{
            var cartJson = localStorage.getItem("cart");
            if (cartJson!=null){
                var cart = JSON.parse(cartJson);
                console.log(cart);
                if (cart[id]==undefined){
                    cart[id]=count;
                }else{
                    cart[id]=cart[id]+count;                                 
                }
                localStorage.setItem("cart", JSON.stringify(cart));
            }else{
                cart = {};
                cart[id]=count;
                localStorage.setItem("cart", JSON.stringify(cart));
            }
        }
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
            <img className="card-image" src={imagePath}/>
            <div className="grid">
                <div className="compteur-div">
                    <span className="material-symbols-outlined-card material-symbols-outlined spanr" onClick={decrement}>remove</span>
                    <p className="compt">{count}</p>
                    <span className="material-symbols-outlined-card material-symbols-outlined spanl" onClick={increment}>add</span>
                </div>
                <span className="material-symbols-outlined-card material-symbols-outlined icon" onClick={addToCart}>shopping_bag</span>
                <h2 className="price">{price} &euro;</h2>
            </div>
            <br/>
            <h4 className="stock">Stock : {stock}</h4>

        </div>
        </>
    )
}

export default Card