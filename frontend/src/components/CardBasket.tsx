function CardBasket(props:{nbObjectsCart : number,  setNbObjectsCart : React.Dispatch<React.SetStateAction<number>>, name:string,id:any,quantity:number,price:string, img:string}){
    const imagePath = "src/assets/" + props.img


    const removeFromBasket = () => {
        props.setNbObjectsCart(props.nbObjectsCart-props.quantity)
        var userId=localStorage.getItem("user");
        if (userId!=null){
            const data = {
                user_id: userId,
                product_ref: props.id,
            }

            const apiUrl = 'http://127.0.0.1:8000/posts/deleteItem/';
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
                .then( () => {
                    console.log("Success");
                })
                .catch(err => {
                    console.log(err.message);
                });
            window.location.reload();
        }else{
            var cartJson = localStorage.getItem("cart");
            if (cartJson!=null){
                var cart = JSON.parse(cartJson.valueOf());
                delete cart[props.id];
                if (Object.keys(cart).length>0){
                    localStorage.setItem("cart", JSON.stringify(cart));
                }else{
                    localStorage.removeItem("cart");
                }
                window.location.reload();
            }
        }
    }

    return(
        <>

        <div className="standard-card card-basket">
            <div className='card-basket-div-image'>
                <img className="card-basket-image" src={imagePath}/>
            </div>
            <div className='card-basket-info-product'>
                <div className='card-basket-name-product'>
                    <h2>{props.name}</h2>
                    <h3>Référence : {props.id}</h3>
                </div>
                <span className="material-symbols-outlined" onClick={removeFromBasket}>close</span>
                <h3 className='card-basket-name-quantity'>Quantité : {props.quantity}</h3>
                <h3 className='card-basket-name-price'>{props.price} &euro;</h3>
            </div> 
        </div>
        </>
    )
}

export default CardBasket