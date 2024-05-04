function CardBasket(props:{name:string,id:any,quantity:number,price:string, img:string}){
    const imagePath = "src/assets/" + props.img


    const removeFromBasket = () => {
        const data = {
            user_id: localStorage.getItem("user"),
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
                    <h3>N° ref {props.id}</h3>
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