import hedgehog_img from '../assets/logo.png'
import person_icon from '../assets/person.svg'
import favorite_icon from '../assets/favorite.svg'
import cart_icon from '../assets/cart.svg'
import './Header.css'
import ButtonNavbar from "./ButtonNavbar.tsx";
function Header() {

    return(
        <>
            <header className="header">
                <div className="title_container">
                    <img src={hedgehog_img} alt="hedgehog img" className="logo" />
                </div>
                <div>
                    <img src={favorite_icon} alt="hedgehog img" />
                    <img src={person_icon} alt="hedgehog img" />
                    <img src={cart_icon} alt="hedgehog img" />
                </div>
                <div className="navBarContainer">
                    <ButtonNavbar text="Nourriture" link="/food" />
                    <ButtonNavbar text="Cabane" link="/house" />
                    <ButtonNavbar text="Jouets" link="/toys" />
                    <ButtonNavbar text="Contact" link="/contact" />
                </div>
            </header>
        </>
    )
}

export default Header