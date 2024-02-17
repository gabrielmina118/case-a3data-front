import React from "react";
import { StyledTable, StyledTh, StyledTd, StyledTr } from "./styled";
const TableHeader = ({ headers }) => (
    <thead>
        <tr>
            {headers.map((header, index) => (
                <StyledTh key={index}>{header}</StyledTh>
            ))}
        </tr>
    </thead>
);

const TableCell = ({ data }) => (
    <tbody>
        {data.map((row, rowIndex) => (
            <StyledTr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <StyledTd key={cellIndex}>{cell}</StyledTd>
                ))}
            </StyledTr>
        ))}
    </tbody>
);
const TableCustom = ({ headers, data }) => (
    <StyledTable>
        <TableHeader headers={headers} />
        <TableCell data={data} />
    </StyledTable>
);

export default TableCustom;
