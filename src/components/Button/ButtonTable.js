import React from "react";
import { MainButtonGroup } from "./syled";
import deleteIcon from "../../assets/icon-remover.svg";
import updateIcon from "../../assets/icon-editar.svg";

const ButtonTableGroup = ({ onEdit, onDelete }) => (
    <MainButtonGroup>
        <button onClick={onEdit}>
            <img src={deleteIcon} />
        </button>
        <button onClick={onDelete}>
            <img src={updateIcon} />
        </button>
    </MainButtonGroup>
);

export default ButtonTableGroup;
