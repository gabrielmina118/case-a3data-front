import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./syled";

const Button = ({ children, onClick, icon, size, color, textColor, type }) => {
    return (
        <ButtonStyled
            onClick={onClick}
            size={size}
            textColor={textColor}
            color={color}
            type={type}
        >
            {icon && <img src={icon} alt={`Icone ${children}`} type={type} />}
            {children}
        </ButtonStyled>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
