import styled from "styled-components";
export const ModalBackdrop = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px;
`;

export const ModalContainer = styled.div`
    background: #5a5a5a98;
    position: fixed;
    width: 50%;
    height: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
`;

export const Title = styled.div`
    background: #ededec;
    display: flex;
    height: 50%;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const CloseButton = styled.div`
    cursor: pointer;
`;

export const CloseIcon = styled.img`
    width: 36px;
    height: 36px;
`;

export const Text = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12% 20px;
`;
