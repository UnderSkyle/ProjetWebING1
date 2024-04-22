
import './Welcome.css';

function Welcome() {
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
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="Himage">
            <h1 className="Title">Tout pour votre <br/>hérisson !</h1>
            
            <a href="#blocks-know-more"><button className="LinkButton" role="button">En savoir plus</button></a>


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

export default Welcome

