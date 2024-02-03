import {NavLink} from "react-router-dom";

function ButtonNavBar(props: { text: string; link: string; isStyled: boolean}) {
    const { text, link, isStyled } = props;
    const baseStyle = {
        fontFamily: "Pacifico, cursive",
        fontSize: "1.6em",
        color: "white",
        textDecoration: "none",
        margin: "10px 15px",
        padding: "0.5rem 1rem",
    };

    const specialStyle = {
        borderRadius: "50px",
        backgroundColor: "#3E3223",
    };

    const combinedStyle = isStyled ? { ...baseStyle, ...specialStyle } : baseStyle;

    return(
        <NavLink style={combinedStyle} to={link}>{text}</NavLink>
    )


}

ButtonNavBar.defaultProps = {
    isStyled: false
}
export default ButtonNavBar;