function CardOrder(props: {image:string, numOrder:null | undefined | any,numArticles:number,date:string,status:string,price:string}){
    var urlImage="src/assets/"+props.image;
    return(
        <>
        <div className="card-basket card-order">
            <div className='card-basket-div-image'>
                <img className="card-basket-image" src={urlImage}/>
            </div>
            <div className='card-order-info'>
                <div className='card-order-info-left'>
                    <h2 className="produit-card">Commande n° {props.numOrder}</h2>
                    <h3 className="produit-card">{props.numArticles} {(props.numArticles)>1 ? "articles" : "article"}</h3>
                </div>
                <div className='card-order-info-right'>
                    <h3 className="produit-card">{props.date}</h3>
                    <h3 className="produit-card">{props.status}</h3>
                    <h3 className="produit-card">{props.price} &euro;</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardOrder