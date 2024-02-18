import React from "react";
import { Table, Th, Td, Tr } from "./styled";
const TableHeader = ({ headers }) => (
    <thead>
        <tr>
            {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
            ))}
        </tr>
    </thead>
);

const TableCell = ({ rows }) => (
    <tbody>
        {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                    <Td key={cellIndex}>{cell}</Td>
                ))}
            </Tr>
        ))}
    </tbody>
);
const TableCustom = ({ headers, rows }) => (
    <Table>
        <TableHeader headers={headers} />
        <TableCell rows={rows} />
    </Table>
);

export default TableCustom;
