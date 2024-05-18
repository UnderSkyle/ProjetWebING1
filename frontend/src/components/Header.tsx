import hedgehog_img from '../assets/logo.png'
import ButtonNavbar from "./ButtonNavbar.tsx";
function Header(props:{ nbObjectsCart:number}) {

    var user = localStorage.getItem("user");
    var icon_person="person";
    var link_account="/login"
    if (user!=null){
        icon_person="person_check";
        link_account="/account"
    }


    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"/>
            <link rel="presonnect" href="https://fonts.googleapis.com"/>
            <link rel="presonnect" href="https://fonts.gstatic.com"/>
            <header className="header">
                <div className="logo-header-container">
                    <a href="/"><img src={hedgehog_img} alt="hedgehog img" className="logo-header" /></a>
                </div>
                <div className='icons-header-container'>
                    <a href={link_account}><span id="icon-header-person" className="material-symbols-outlined material-symbols-outlined-header">{icon_person}</span></a>
                    <a href="/basket"><span id="icon-header-cart" className="material-symbols-outlined material-symbols-outlined-header"><span className='nb-objects-cart'>{props.nbObjectsCart}</span>shopping_cart</span></a>
                </div>
                <i onClick={openNavBar} className="fas fa-bars" id="ham-menu"></i>
                <div onClick={closeNavBar} id="overlay-nav-bar"></div>
                <div className="navBarContainer">
                    <ul id="nav_bar">
                        <li className='li-header-logo'><a className='logo-nav-bar' href="/"><img src={hedgehog_img} alt="hedgehog img" className="logo-nav-bar" /></a> <i onClick={closeNavBar} className="fas fa-times" id="close-menu"></i></li>
                        <li onClick={closeNavBar}><ButtonNavbar text="Nourriture" link="/food" /></li>
                        <li onClick={closeNavBar}><ButtonNavbar text="Cabane" link="/house" /></li>
                        <li onClick={closeNavBar}><ButtonNavbar text="Jouets" link="/toys" /></li>
                        <li onClick={closeNavBar}><ButtonNavbar text="Contact" link="/contact" /></li>
                        <li onClick={closeNavBar} className='li-header-icons'><a href={link_account}><span id="icon-nav-bar-person" className="material-symbols-outlined material-symbols-outlined-header">person</span><span className='text-icon-nav-bar'>Mon compte</span></a></li>
                        <li onClick={closeNavBar} className='li-header-icons'><a href="/basket"><span id="icon-nav-bar-cart" className="material-symbols-outlined material-symbols-outlined-header">shopping_cart</span ><span className='text-icon-nav-bar'>Mon panier</span></a></li>
                        
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