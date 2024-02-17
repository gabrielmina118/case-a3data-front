import React from "react";
import PropTypes from "prop-types";
import { ButtonCustomStyled } from "./syled";

const ButtonCustom = ({ children, onClick }) => {
    return (
        <ButtonCustomStyled onClick={onClick}>{children}</ButtonCustomStyled>
    );
};

ButtonCustom.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ButtonCustom;
