import hedgehog_img from '../assets/logo.png'
import './Header.css'
import ButtonNavbar from "./ButtonNavbar.tsx";
function Header() {

    var user = localStorage.getItem("user");
    var icon_person="person";
    if (user!=null){
        icon_person="person_check";
    }
    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
            <link rel="presonnect" href="https://fonts.googleapis.com"/>
            <link rel="presonnect" href="https://fonts.gstatic.com"/>
            <header className="header">
                <div className="title_container">
                    <a href="/"><img src={hedgehog_img} alt="hedgehog img" className="logo" /></a>
                </div>
                <div className='icons-container'>
                    <a href="/login"><span id="icon-person" className="material-symbols-outlined">{icon_person}</span></a>
                    <span id="icon-cart" className="material-symbols-outlined">shopping_cart</span>
                </div>
                <i onClick={openNavBar} className="fas fa-bars" id="ham-menu"></i>
                <div onClick={closeNavBar} id="overlay-nav-bar"></div>
                <div className="navBarContainer">
                    <ul id="nav_bar">
                        <li className='li-logo'><a className='logo-nav-bar' href="/welcome"><img src={hedgehog_img} alt="hedgehog img" className="logo-nav-bar" /></a> <i onClick={openNavBar} className="fas fa-times" id="close-menu"></i></li>
                        <li><ButtonNavbar text="Nourriture" link="/food" /></li>
                        <li><ButtonNavbar text="Cabane" link="/house" /></li>
                        <li><ButtonNavbar text="Jouets" link="/toys" /></li>
                        <li><ButtonNavbar text="Contact" link="/contact" /></li>
                        <li className='li-icons'><a href="/login"><span id="icon-nav-bar-person" className="material-symbols-outlined">person</span><span className='text-icon-nav-bar'>Mon compte</span></a></li>
                        <li className='li-icons'><span id="icon-nav-bar-cart" className="material-symbols-outlined">shopping_cart</span ><span className='text-icon-nav-bar'>Mon panier</span></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

function openNavBar(){
    let hamMenuIcon = document.getElementById("ham-menu");
    let navBar = document.getElementById("nav_bar");
    let overlay = document.getElementById("overlay-nav-bar");
    navBar?.classList.toggle("active");
    //hamMenuIcon?.classList.toggle("fa-times");
    overlay?.classList.toggle("overlay-nav-bar");
}

function closeNavBar(){
    let navBar = document.getElementById("nav_bar");
    let overlay = document.getElementById("overlay-nav-bar");
    navBar?.classList.toggle("active");
    overlay?.classList.toggle("overlay-nav-bar");
}

export default Header