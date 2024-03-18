import hedgehog_img from '../assets/logo.png'
import './Header.css'
import ButtonNavbar from "./ButtonNavbar.tsx";
function Header() {

    return(
        <>
            <header className="header">
                <div className="title_container">
                    <img src={hedgehog_img} alt="hedgehog img" className="logo" />
                </div>
                
                <div className="navBarContainer">
                    <ButtonNavbar text="Accueil" link="/welcome" />
                    <ButtonNavbar text="Nourriture" link="/food" />
                    <ButtonNavbar text="Cabane" link="/house" />
                    <ButtonNavbar text="Jouets" link="/toys" />
                    <ButtonNavbar text="Contact" link="/contact" />
                    <ButtonNavbar text="Se Connecter" link="/login" isStyled={true} />
                </div>
            </header>
        </>
    )
}

export default Header