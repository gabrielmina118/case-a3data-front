import styled from "styled-components";
export const ModalBackdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
`;
export const Blackout = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000080;
`;
const sizes = {
    small: "450px",
    mediun: "800px",
    large: "1200px",
};
export const ModalContainer = styled.div`
    background: #5a5a5a98;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #5a5a5a98;
    overflow: hidden;
    max-width: calc(100% - 1rem);
    width: ${(props) => sizes[props.size] || sizes.mediun};
`;

export const ModalContent = styled.div`
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ModalHeader = styled.div`
    background: #ededec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
    @media (max-width: 768px) {
        padding: 1rem 2rem;
    }
`;

export const Title = styled.h2`
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const CloseButton = styled.div`
    cursor: pointer;
    width: 40px;
    @media (max-width: 768px) {
        width: 32px;
    }
    img {
        width: 100%;
    }
`;

export const CloseIcon = styled.img`
    width: 36px;
    height: 36px;
`;

export const ModalBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1;
    width: 100%;
`;
