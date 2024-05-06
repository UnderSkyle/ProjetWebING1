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
            <div className="mediumcontainer-account">
                <h1 className="one">Votre compte</h1>
                <a href="#blocks-know-more" className="two"><button className="LinkButton-account" role="button">Se déconnecter</button></a>
            </div>


           <div className="bigcontainer-account">
                <div className="container-account one">
                    <div className="grid1-account">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">account_circle</span>
                    </div>
                    <div className="grid2-account"><h6>Votre profil</h6></div>
                    <div className="grid3-account"><p>Voir les informations et les modifier</p></div>    
                    <br/>
                        
                    
                </div>

                <div className="container-account two">
                    <div className="grid1-account">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">home</span>
                    </div>    
                    <div className="grid2-account"><h6>Vos adresses</h6></div>
                    <br/>
                    <div className="grid3-account"><p>Voir vos adresses de livraison et les modifier</p></div>
                    
                </div>

                <div className="container-account three">
                    <div className="grid1-account">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">package_2</span>
                    </div>     
                    <div className="grid2-account"><h6>Vos commandes</h6></div>
                        <br/>
                    <div className="grid3-account"><p>Voir vos commandes et les suivre</p></div>
                    
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
           </div>
        
        </>
    )
}

export default Account