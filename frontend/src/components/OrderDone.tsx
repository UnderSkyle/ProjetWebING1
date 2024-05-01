
import './Welcome.css';

function OrderDone() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 200,
      };
      //<link rel="stylesheet" href="https://react-slick.neostack.com/assets/css/styles.6ce6876c.css"/>

    return(
        <>  
            <div className="Himage">
            <h1 className="Title">Commande validée </h1>
            <h3 className="Title">Votre commande a été validée !<br/>Vous pouvez la suivre sur la page<br/>de vos commandes</h3>


            </div>
            <div className='icons-advantages'>
                <div>
                    <span className="material-symbols-rounded">
                        package_2
                    </span>
                    <span className='text-advantages'>Livraison gratuite</span>
                </div>
                <div>
                    <span className="material-symbols-rounded" >
                        support_agent
                    </span>
                    <span className='text-advantages'>Service client</span>
                </div>
                <div>
                    <span className="material-symbols-rounded">
                        credit_score
                    </span>
                    <span className='text-advantages'>Paiement sécurisé</span>
                </div>
            </div>
            <div id='blocks-know-more'>
                <div id='food-block'>
                    <span>Nourriture</span>
                    <br />
                    <button><a href='/food'>Voir plus</a></button>
                </div>
                <div id='houses-block'>
                    <span>Cabanes</span>
                    <br />
                    <button><a href="/house">Voir plus</a></button>
                </div>
                <div id='toys-block'>
                    <span>Jouets</span>
                    <br />
                    <button><a href="/toys">Voir plus</a></button>
                </div>
            </div>
        </>
    )
}

export default OrderDone

