import './Card.css'
import image from '../assets/n01.png'

function CardOrder({numOrder,numArticles,date,status,price}){
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>

        <div className="card">
            <div className="grid">
                <img className="card-image" src={image}/>
                <div>
                    <h2 className="produit">Commande n° {numOrder}</h2>
                    <h3 className="produit">{numArticles} articles</h3>
                </div>
                <div>
                    <h3 className="produit">{date}</h3>
                    <h3 className="produit">{status}</h3>
                    <h3 className="produit">{price} &euro;</h3>
                </div>   
            </div>
        </div>
        </>
    )
}

export default CardOrder