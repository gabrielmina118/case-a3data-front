import React from "react";
import TableAction from "../TableAction/TableAction";
const Hospital = () => {
    const mapColumns = [
        { text: "Id", key: "id", edit: false },
        {
            text: "Nome do hospital",
            key: "name",
            edit: true,
            type: "text",
        },
    ];
    return (
        <>
            <TableAction
                title={"Hospitais Cadastradas"}
                mapColumns={mapColumns}
                entity={"hospital"}
                path={"hospital"}
            />
        </>
    );
};

export default Hospital;
