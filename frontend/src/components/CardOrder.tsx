import './Card.css'
import image from '../assets/n01.png'

// @ts-ignore
function CardOrder({numOrder,numArticles,date,status,price}){
    return(
        <>
        <div className="card-card">
            <div className="grid-card">
                <img className="card-image" src={image}/>
                <div>
                    <h2 className="produit-card">Commande n° {numOrder}</h2>
                    <h3 className="produit-card">{numArticles} articles</h3>
                </div>
                <div>
                    <h3 className="produit-card">{date}</h3>
                    <h3 className="produit-card">{status}</h3>
                    <h3 className="produit-card">{price} &euro;</h3>
                </div>   
            </div>
        </div>
        </>
    )
}

export default CardOrder