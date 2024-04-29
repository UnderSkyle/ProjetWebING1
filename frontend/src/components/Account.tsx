import './CardPages.css';
function Account() {


    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>
        <br/><br/><br/>
            <div>
                <h1>Votre compte</h1>
                <a href="#blocks-know-more"><button className="LinkButton" role="button">Se déconnecter</button></a>
           </div>

           <div className="bigcontainer">
                <div className="container">
                    <span className="material-symbols-outlined-card material-symbols-outlined icon">account_circle
                        <h6>Votre profil</h6>
                        <p>Voir les informations et les modifier</p>
                    </span>
                </div>

                <div className="container">
                    <span className="material-symbols-outlined-card material-symbols-outlined icon">home
                        <h4>Vos adresses</h4>
                        <p>Voir vos adresses de livraison et les modifier</p>
                    </span>
                </div>

                <div className="container">
                    <span className="material-symbols-outlined-card material-symbols-outlined icon">package_2
                        <h4>Vos commandes</h4>
                        <p>Voir vos commandes et les suivre</p>
                    </span>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>

        </>
    )
}

export default Account