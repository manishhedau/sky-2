import { NavLink } from "react-router-dom";

const MobileNavLink = (props) => {

    const { url, content, isActive, handleClick, id } = props;

    return (
        <NavLink style={{color: "white"}} to={url}>
            <div id={id} onClick={handleClick} style={{ color: isActive ? "white" : "black" }}>{content}</div>
        </NavLink>
    );
}

export default MobileNavLink;