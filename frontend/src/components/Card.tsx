import {useState} from "react";


function Card(props:{name:string, id: any, price: string, stock: number, img: string}){
    const [count, setCount] = useState(0);
    const imagePath = "src/assets/" + props.img;
    const increment = () => {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const addToCart = () => {
        if (count > 0) {
            const user = localStorage.getItem("user");
            if (user != null) {
                const data = {
                    id_user: user,
                    quantity: count,
                    ref_product: props.id
                };
                console.log(data);
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
            } else {
                var cartJson = localStorage.getItem("cart");
                var cartitem = {name: props.name, ref: props.id, price: props.price, quantity: count, image: props.img}
                if (cartJson != null) {
                    var cart = JSON.parse(cartJson);
                    console.log(cart);
                    if (cart[props.id] == undefined) {
                        cart[props.id] = cartitem;
                    } else {
                        cart[props.id].quantity = cart[props.id].quantity + count;
                    }
                    localStorage.setItem("cart", JSON.stringify(cart));
                } else {
                    cart = {};
                    cart[props.id] = cartitem;
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
            }
        }
    }

    return(
        <>

        <div className="card-card">
            <h2 className="produit-card">{props.name}</h2>
            <h4 className="ref-card">N° ref {props.id}</h4>
            <div className='card-div-image'>
                <img className="card-image" src={imagePath}/>
            </div>
            <div className='card-products-info'>
                <div className="grid-card">
                    <div className='compteur-cart'>
                        <div className="compteur-div-card">
                            <span className="material-symbols-outlined-card material-symbols-outlined spanr-card" onClick={decrement}>remove</span>
                            <span className="compt-card">{count}</span>
                            <span className="material-symbols-outlined-card material-symbols-outlined spanl-card" onClick={increment}>add</span>
                        </div>
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-card" aria-disabled={count==0} onClick={addToCart}>shopping_bag</span>
                    </div>
                    <h2 className="price-card">{props.price} &euro;</h2>
                </div>
                <h4 className="stock-card" style={{display:"none"}}>Stock : {props.stock}</h4>
            </div>
        </div>
        </>
    )
}

export default Card