function Footer() {


    return(
        <>
            <footer className="footer">
                <img className='logo-footer-circle' src='/src/assets/logo_rond.png'></img>
                <img className='logo-footer-text' src='/src/assets/logo_vert.png'></img>
                <div className='footer-text-under-logo'>
                    <p className='slogan-footer'>Tous pour votre hérisson</p>
                    <button className="contact-button-footer" role="button"><a href="/contact">Contactez-nous !</a></button>
                </div>
                <div className='links-pages-footer'>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/food">Nourriture</a></li>
                        <li><a href="/house">Cabanes</a></li>
                        <li><a href="/toys">Jouets</a></li>
                    </ul>
                </div>
                <div className='social-medias-footer'>
                    <ul>
                        <li><a href="https://www.facebook.com/"><img src='/src/assets/icons8-facebook.svg'></img></a></li>
                        <li><a href="https://www.instagram.com/"><img src='/src/assets/icons8-instagram.svg'></img></a></li>
                        <li><a href="https://www.linkedin.com/"><img src='/src/assets/icons8-linkedin.svg'></img></a></li>
                    </ul>
                </div>
                
                <p className='footer-copyright'> &copy; 2024 QuillQuest. Hedgehog Equipment Shop Cergy, France. All Rights Reserved </p>
            </footer>
        </>
    )
}

export default Footer