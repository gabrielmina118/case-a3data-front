import styled from "styled-components";

export const StyledTable = styled.table`
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: auto;
`;

export const StyledTh = styled.th`
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    width: 120px;
    font-weight: bold;
`;

export const StyledTd = styled.td`
    border: 1px solid black;
    padding: 10px;
    text-align: center;
    width: 120px;
`;

export const StyledTr = styled.tr`
    &:hover {
        background-color: #085f63;
        color: #fff;
        cursor: pointer;
    }
`;
