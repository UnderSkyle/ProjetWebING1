import hedgehog_img from '../assets/logo.png'
import './Header.css'
function Header() {


    return(
        <>
            <header className="header">
                <img src={hedgehog_img} alt="hedgehog img" className="logo" />
                <p></p>
            </header>
        </>
    )
}

export default Header