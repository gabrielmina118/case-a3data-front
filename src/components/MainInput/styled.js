import styled from "styled-components";

export const Input = styled.div`
    float: left;
    position: relative;
    border-radius: 4px;
    width: 80%;

    label {
        color: #999;
        padding: 1.3rem 30px 1rem 30px;
        position: absolute;
        top: 10px;
        left: 0;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        pointer-events: none;
    }

    input {
        width: 100%;
        padding: 30px;
        border: 0;
        font-size: 1em;
        background-color: #2d2d2d;
        color: #fff;
        border-radius: 50px;

        &:focus {
            outline: 0;
            font-size: 0.8em;
            color: #fff;
            -webkit-transition: all 0.225s ease;
            transition: all 0.225s ease;
            background: #00cfd5;
            border-radius: 50px;
            font-weight: bold;
            height: 80px;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;
