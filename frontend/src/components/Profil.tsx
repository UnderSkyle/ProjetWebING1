
function Profil() {


    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
        <link rel="presonnect" href="https://fonts.googleapis.com"/>
        <link rel="presonnect" href="https://fonts.gstatic.com"/>

        <h1>Votre profil</h1>
        <div>
            <span className="material-symbols-outlined-card material-symbols-outlined icon">person
                <h4>Nom</h4>
            </span>
        </div>
        <div>
            <span className="material-symbols-outlined-card material-symbols-outlined icon">mail
                <h4>Adresse e-mail</h4>
            </span>
        </div>
        <a href="#blocks-know-more"><button className="LinkButton" role="button">Modifier</button></a>
        </>
    )
}

export default Profil