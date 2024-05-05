function CardOrder(props: {image:string, numOrder:null | undefined | any,numArticles:number,date:string,status:string,price:string}){
    var urlImage="src/assets/"+props.image;
    return(
        <>
        <div className="standard-card card-order">
            <div className='card-order-div-image'>
                <img className="card-order-image" src={urlImage}/>
            </div>
            <div className='card-order-info'>
                <div className='card-order-info-left'>
                    <h2 className="">Commande n° {props.numOrder}</h2>
                    <h3 className="">{props.numArticles} {(props.numArticles)>1 ? "articles" : "article"}</h3>
                </div>
                <div className='card-order-info-right'>
                    <h3 className="">{props.date}</h3>
                    <h3 className="">{props.status}</h3>
                    <h3 className="">{props.price} &euro;</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardOrder