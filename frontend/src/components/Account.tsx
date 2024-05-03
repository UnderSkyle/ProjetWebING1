function Account() {


    const deconnect = (event: any) => {
        localStorage.removeItem("user");
        window.location.href = 'http://localhost:5173/';

    }
    return(
        <>
            <div className='standard-page'>
                <div className="mediumcontainer-account">
                    <h1 className="Title-account">Votre compte</h1>
                    <button onClick={deconnect} className="LinkButton-account" role="button">Se déconnecter</button>
                </div>


            <div className="bigcontainer-account">
                    <a href='/profil' className="container-account one">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">person</span>
                        <div className='text-container-account'>
                            <h3>Votre profil</h3>
                            <p>Voir les informations et les modifier</p>
                        </div>
                    </a>
                    <a href="/address" className="container-account two">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">home</span>
                        <div className='text-container-account'>
                            <h3>Vos adresses</h3>
                            <p>Voir vos adresses de livraison et les modifier</p>
                        </div>
                        
                    </a>
                    <a href='/order' className="container-account three">
                        <span className="material-symbols-outlined-card material-symbols-outlined icon-account">package_2</span>
                        <div className='text-container-account'>  
                        <h3>Vos commandes</h3>
                        <p>Voir vos commandes et les suivre</p>
                        </div>
                        
                    </a>
            </div>
           </div>
        </>
    )
}

export default Account