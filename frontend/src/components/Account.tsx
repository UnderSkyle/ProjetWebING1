import './CardPages.css';
function Account() {


    return(
        <>
        <br/><br/><br/>
            <div className="mediumcontainer-account">
                <h1 className="one">Votre compte</h1>
                <button className="LinkButton-account" role="button">Se déconnecter</button>
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