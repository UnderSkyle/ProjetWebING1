import './Card.css'

function CardBasket({name,id,quantity,price, img}){
    const imagePath = "src/assets/" + img

    return(
        <>

        <div className="card-card">
            <div className="grid-card">
                <img className="card-image" src={imagePath}/>
                <div>
                    <h2 className="produit-card">{name}</h2>
                    <h3 className="produit-card">N° ref {id}</h3>
                    <span className="material-symbols-outlined-card material-symbols-outlined icon">close</span>

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