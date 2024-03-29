import TableAction from "../TableAction/TableAction";
import React from "react";

const SurgicalOrder = () => {
    const mapColumns = [
        { text: "Id", key: "id", edit: false },
        {
            text: "Número da sala",
            key: "room",
            edit: true,
            type: "number",
            list: true,
            pathSearch: "room",
            keySearch: "id",
            textSearch: "numberRoom",
        },
        {
            text: "Nome da pessoa profissional",
            key: "doctor",
            edit: true,
            type: "text",
        },
        {
            text: "Nome do paciente",
            key: "patient",
            edit: true,
            type: "text",
        },
        {
            text: "Numero do hospital",
            key: "hospital",
            edit: true,
            list: true,
            type: "number",
            pathSearch: "hospital",
            keySearch: "id",
            textSearch: "name",
        },
        {
            text: "Numero do procedimento",
            key: "procedure",
            edit: true,
            type: "number",
            list: true,
            pathSearch: "procedure",
            keySearch: "id",
            textSearch: "procedureName",
        },
        {
            text: "Obersevações Gerais",
            key: "generalObservations",
            edit: true,
            type: "text",
        },
    ];
    return (
        <>
            <TableAction
                title={"Pedidos Cirúrgicos Cadastradas"}
                mapColumns={mapColumns}
                entity={"surgicalOrder"}
                path={"surgical-order"}
            />
        </>
    );
};

export default SurgicalOrder;
