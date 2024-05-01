import './Card.css'

function CardBasket({name,id,quantity,price, img}){
    const imagePath = "src/assets/" + img

    const removeFromBasket = () => {
        const data = {
            user_id: localStorage.getItem("user"),
            product_ref: id,
        }

        const apiUrl = 'http://127.0.0.1:8000/posts/removeItem/';
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
    }

    return(
        <>

        <div className="card-card">
            <div className="grid-card">
                <img className="card-image" src={imagePath}/>
                <div>
                    <h2 className="produit-card">{name}</h2>
                    <h3 className="produit-card">N° ref {id}</h3>
                    <span className="material-symbols-outlined-card material-symbols-outlined icon" onClick={removeFromBasket}>close</span>

                </div>
                <div>
                    <h3 className="produit-card">{quantity}</h3>
                    <h3 className="produit-card">{price} &euro;</h3>
                </div>   
            </div>
        </div>
        </>
    )
}

export default CardBasket