import React from "react";
import TableAction from "../TableAction/TableAction";

const mapColumns = [
    { text: "Id", key: "id", edit: false },
    {
        text: "Nome do procedimento",
        key: "procedureName",
        edit: true,
        type: "text",
    },
];
const Procedure = () => {
    return (
        <>
            <TableAction
                title={"Procedimentos Cadastradas"}
                mapColumns={mapColumns}
                entity={"procedimento"}
                path={"procedure"}
            />
        </>
    );
};

export default Procedure;
