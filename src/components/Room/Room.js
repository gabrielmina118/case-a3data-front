import React from "react";
import TableAction from "../TableAction/TableAction.js";

const mapColumns = [
    { text: "Id", key: "id", edit: false },
    { text: "Número da sala", key: "numberRoom", edit: true, type: "number" },
];
const Room = () => {
    return (
        <>
            <TableAction
                title={"Salas Cadastradas"}
                mapColumns={mapColumns}
                entity={"sala"}
                path={"room"}
            />
        </>
    );
};

export default Room;
