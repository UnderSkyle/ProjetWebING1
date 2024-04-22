import {NavLink} from "react-router-dom";

function ButtonNavBar(props: { text: string; link: string; isStyled: boolean}) {
    const { text, link, isStyled } = props;
    const baseStyle = {
        fontFamily: "Paytone One",
        fontSize: "1.6em",
        color: "rgb(243,237,179)",
        textDecoration: "none",
        margin: "10px 20px",
        padding: "0.5rem 1rem",
        letterSpacing: ".25px",
        cursor:"pointer"
    };

    const specialStyle = {
        borderRadius: "50px",
        color: "rgb(62,50,35)",
        backgroundColor: "rgb(243,237,179)",
        alignItem: "center",
        boxShadow: "rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0",
        padding: "15px 60px"

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