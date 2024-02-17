import React, { useState } from "react";

import deleteIcon from "../../assets/icon-remover.svg";
import {
    CloseButton,
    CloseIcon,
    ModalBackdrop,
    ModalContainer,
    ModalContent,
    Text,
    Title,
} from "./styled";

const ModalRegisterInfo = ({ infoModal }) => {
    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <ModalBackdrop>
                    <ModalContainer>
                        <ModalContent>
                            <Title>
                                <h1>Sucesso!</h1>
                                <CloseButton onClick={onCloseModal}>
                                    <CloseIcon src={deleteIcon} alt="Fechar" />
                                </CloseButton>
                            </Title>
                            <Text>Informação realizada com sucesso!</Text>
                        </ModalContent>
                    </ModalContainer>
                </ModalBackdrop>
            )}
        </>
    );
};

export default ModalRegisterInfo;
