import './Basket.css'
import CardBasket from './CardBasket.tsx'
function Basket() {


    return(
        <>
            <h1>Votre panier</h1>
            <CardBasket
                name={'mnom'}
                id={'001'}
                quantity={'3'}
                price={'30'}
            />
            <CardBasket
                name={'mnom'}
                id={'001'}
                quantity={'3'}
                price={'30'}
            />
            <CardBasket
                name={'mnom'}
                id={'001'}
                quantity={'3'}
                price={'30'}
            />

            <div>
                <h3>Total : &euro;</h3>
                <a href="#blocks-know-more"><button className="LinkButton" role="button">Passer la commande</button></a>
            </div>
        </>
    )
}

export default Basket