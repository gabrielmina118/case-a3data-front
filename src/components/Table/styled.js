import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: auto;
`;

export const Th = styled.th`
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    width: 120px;
    font-weight: bold;
    background-color: var(--primary-color);
    color: #fff;
`;

export const Td = styled.td`
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    width: 120px;
`;

export const Tr = styled.tr`
    &:hover {
        background-color: #085f6320;
    }
`;
