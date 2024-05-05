function OrderDone() {
    var userId = localStorage.getItem("user");
    if (userId==null){
        window.location.href="/login";
    }

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

