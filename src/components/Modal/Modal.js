import React from "react";

import closeIcon from "../../assets/icon-close.svg";
import {
    CloseButton,
    CloseIcon,
    ModalBackdrop,
    ModalContainer,
    ModalContent,
    ModalBody,
    ModalHeader,
    Title,
    Blackout,
} from "./styled";

const Modal = ({ title, onClose, isOpen, children, size }) => {
    return (
        <>
            {isOpen && (
                <ModalBackdrop>
                    <Blackout />
                    <ModalContainer size={size}>
                        <ModalContent>
                            <ModalHeader>
                                <Title>{title}</Title>
                                <CloseButton onClick={onClose}>
                                    <CloseIcon src={closeIcon} alt="Fechar" />
                                </CloseButton>
                            </ModalHeader>
                            {children && <ModalBody>{children}</ModalBody>}
                        </ModalContent>
                    </ModalContainer>
                </ModalBackdrop>
            )}
        </>
    );
};

export default Modal;
