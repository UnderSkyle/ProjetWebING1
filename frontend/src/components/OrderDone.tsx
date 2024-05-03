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
            <div className="standard-page image-order-done">
            <h1 className="title-order-done">Commande validée </h1>
            <h3 className="subtitle-order-done">Votre commande a été validée !<br/>Vous pouvez la suivre sur la page<br/>de vos commandes</h3>


            </div>
        </>
    )
}

export default OrderDone

