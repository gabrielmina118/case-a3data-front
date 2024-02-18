import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import deleteIcon from "../../assets/icon-remover.svg";
import cancelIcon from "../../assets/icon-cancel.svg";
import saveIcon from "../../assets/icon-save.svg";
import { ButtonsForm, ContainerForm } from "./styled";
import Form from "../Form/Form";
const ModalAction = ({
  onAcion,
  messageSuccess,
  messageError,
  updateData,
  isOpen,
  title,
  textAction,
  colorButtonAction,
  mapColumns,
  subtitleForm,
  onClose,
  row,
  addToast,
  icon,
  initialForm,
  size = "mediun",
}) => {
  return (
    <Modal size={size} title={title} onClose={onClose} isOpen={isOpen}>
      <ContainerForm>
        <Form
          mapColumns={mapColumns}
          initialForm={initialForm}
          submit={async (form) => {
            try {
              await onAcion(form, row);
              addToast({
                message: messageSuccess,
                type: "success",
              });
              await updateData();
              onClose();
            } catch (e) {
              addToast({
                message: messageError,
                type: "error",
              });
            }
          }}
          footer={
            <ButtonsForm>
              <Button
                onClick={onClose}
                color={"gray"}
                size={"medium"}
                icon={cancelIcon}
              >
                Cancelar
              </Button>
              <Button
                type={"submit"}
                color={colorButtonAction}
                size={"medium"}
                icon={icon}
              >
                {textAction}
              </Button>
            </ButtonsForm>
          }
          subtitle={subtitleForm}
        />
      </ContainerForm>
    </Modal>
  );
};
const ModalsAcitions = ({
  entity,
  action,
  row,
  onClose,
  mapColumns,
  createData,
  editData,
  deleteData,
  addToast,
  updateData,
}) => {
  return (
    <>
      {action === "create" && (
        <ModalAction
          onAcion={(body) => createData(body)}
          messageSuccess={"Criado com sucesso!"}
          messageError={"Erro ao criar, tente novamente!"}
          updateData={updateData}
          isOpen={true}
          mapColumns={mapColumns}
          title={`Criar ${entity}`}
          colorButtonAction="secondary"
          onClose={onClose}
          textAction={"Criar"}
          icon={saveIcon}
          addToast={addToast}
        />
      )}
      {action === "edit" && (
        <ModalAction
          onAcion={(body) => editData(body, row.id)}
          messageSuccess={"Editado com sucesso!"}
          messageError={"Erro ao editar, tente novamente!"}
          updateData={updateData}
          isOpen={true}
          mapColumns={mapColumns}
          title={`Editar ${entity}`}
          initialForm={row}
          colorButtonAction="secondary"
          onClose={onClose}
          textAction={"Editar"}
          icon={saveIcon}
          addToast={addToast}
        />
      )}
      {action === "delete" && (
        <ModalAction
          onAcion={() => deleteData(row.id)}
          messageSuccess={"Excluido com sucesso!"}
          messageError={"Erro ao excluir, tente novamente!"}
          updateData={updateData}
          isOpen={true}
          title={`Excluir ${entity}`}
          subtitleForm={`Você tem certeza que deseja excluir o ${entity}? Esta ação não poderá ser desfeita.`}
          colorButtonAction="danger"
          onClose={onClose}
          textAction={"Excluir"}
          icon={deleteIcon}
          addToast={addToast}
          size="small"
        />
      )}
    </>
  );
};

export default ModalsAcitions;
