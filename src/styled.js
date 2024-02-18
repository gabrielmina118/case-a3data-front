import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;
export const ContainerPage = styled.div`
    display: flex;
    margin-left: var(--menu-size-max);
    overflow-y: auto;
    flex-grow: 1;
    height: 100%;
    padding-top: 48px;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;
