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
            <div className="standard-page">
                <div className="background-welcome">
                    <h1 className="title-welcome">Tout pour votre <br/>hérisson !</h1>
                    <a href="#blocks-know-more"><button className="button-welcome-know-more" role="button">En savoir plus</button></a>
                </div>
                <div className='container-welcome-advantages'>
                    <div>
                        <span className="material-symbols-rounded icon-welcome-advantages">
                            package_2
                        </span>
                        <span className='text-advantages'>Livraison gratuite</span>
                    </div>
                    <div>
                        <span className="material-symbols-rounded icon-welcome-advantages" >
                            support_agent
                        </span>
                        <span className='text-advantages'>Service client</span>
                    </div>
                    <div>
                        <span className="material-symbols-rounded icon-welcome-advantages">
                            credit_score
                        </span>
                        <span className='text-advantages'>Paiement sécurisé</span>
                    </div>
                </div>
                <div id='container-blocks-know-more'>
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
            </div>
        </>
    )
}

export default Welcome

