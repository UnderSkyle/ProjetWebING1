import './CardPages.css'


function CardAddress({name,surname,address,postalCodeTown}) {
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>
            <div className="container-card">
                <h3 className="produit">{name} {surname}</h3>
                <h4 className="produit">{address}</h4>
                <h4 className="produit">{postalCodeTown}</h4>
                <br/>
                <div className="grid-card-address">
                    <a href="#blocks-know-more"><button className="LinkButton-card" role="button">Modifier</button></a>
                    <span className="material-symbols-outlined-card material-symbols-outlined icon">delete</span>
                </div>
            </div>
            <br/>

        </>
    )
}

export default CardAddress