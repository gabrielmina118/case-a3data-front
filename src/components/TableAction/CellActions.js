import React from "react";
import { MainButtonGroup } from "./styled";
import deleteIcon from "../../assets/icon-remover.svg";
import updateIcon from "../../assets/icon-editar.svg";
import Button from "../Button/Button";

const CellActions = ({ onOpenEdit, onOpenDelete, row }) => (
  <MainButtonGroup>
    <Button
      onClick={() => onOpenEdit(row)}
      icon={updateIcon}
      size={"small"}
      color="secondary"
    >
      Editar
    </Button>
    <Button
      onClick={() => onOpenDelete(row.id)}
      icon={deleteIcon}
      size={"small"}
      color="danger"
    >
      Deletar
    </Button>
  </MainButtonGroup>
);

export default CellActions;
