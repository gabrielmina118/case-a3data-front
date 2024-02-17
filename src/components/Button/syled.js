import styled from "styled-components";

export const ButtonCustomStyled = styled.button`
    width: 160px;
    color: #fff;
    font-size: 1.2em;
    text-align: center;
    padding: 15px 35px;
    border-radius: 60px;
    display: inline-block;
    background-color: #06bec6;
    cursor: pointer;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06),
        0 2px 10px 0 rgba(0, 0, 0, 0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    border: none;

    &:hover {
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
            0 1px 1px 0 rgba(0, 0, 0, 0.09);
    }
    @media (max-width: 768px) {
        width: 100%;
        float: none;
        text-align: center;
    }
`;

export const MainButtonGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    button {
        cursor: pointer;
        img {
            width: 60px;
            height: 50px;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
`;
