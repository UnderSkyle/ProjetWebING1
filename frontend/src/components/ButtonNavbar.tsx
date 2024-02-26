import {NavLink} from "react-router-dom";

function ButtonNavBar(props: { text: string; link: string; isStyled: boolean}) {
    const { text, link, isStyled } = props;
    const baseStyle = {
        fontFamily: "Pacifico, cursive",
        fontSize: "1.6em",
        color: "rgb(243,237,179)",
        textDecoration: "none",
        margin: "10px 15px",
        padding: "0.5rem 1rem",
    };

    const specialStyle = {
        borderRadius: "50px",
        color: "rgb(62,50,35)",
        backgroundColor: "rgb(243,237,179)",
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