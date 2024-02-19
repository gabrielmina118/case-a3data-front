import React, { useEffect, useState } from "react";
import { ContainerTabel, InfoScreen, Title } from "./styled";
import TableCustom from "../Table/Table";
import CellText from "./CellText";
import CellActions from "./CellActions";
import ModalsAcitions from "./ModalsAcitions";
import Button from "../Button/Button";
import iconAdd from "../../assets/icon-add.svg";
import useToast from "../Toast/Toast";
import app from "../../constants/app";

const TableAction = ({
  mapColumns,
  title,
  entity,
  path,
}) => {
  const [action, setAction] = useState(null);
  const [rowsTable, setRowsTable] = useState([]);
  const [headersTable, setHeadersTable] = useState([]);
  const [data, setData] = useState([]);
  const [rowSelected, setRowSelected] = useState(null);

  const { ToastManager, addToast } = useToast();

  const createData = async (room) => {
    await app.post(`${path}`, room);
  };
  const editData = async (room, id) => {
    await app.put(`${path}/${id}`, room);
  };
  const deleteData = async (id) => {
    await app.delete(`${path}/${id}`);
  };

  const getAll = async () => {
    const response = await app.get(path);
    return response.data.data;
  };
  const updateData = async () => {
    try {
      const response = await getAll();
      setData(response);
    } catch (error) {
      addToast({ message: "Erro ao buscar dados", type: "error" });
    }
  };
  useEffect(() => {
    updateData();
  }, []);
  useEffect(() => {
    if (data?.length > 0) {
      const headersTable = mapColumns.map((column) => (
        <CellText text={column.text} />
      ));
      headersTable.push(<CellText text={"Ações"} />);

      const rowsTable = data.map((row) => {
        const rowTable = mapColumns.map((column) => {
           return <CellText text={row[column.key]} />;
        });
        rowTable.push(
          <CellActions
            onOpenEdit={() => {
              setAction("edit");
              setRowSelected(row);
            }}
            onOpenDelete={() => {
              setAction("delete");
              setRowSelected(row);
            }}
            row={row}
          />
        );
        return rowTable;
      });
      setHeadersTable(headersTable);
      setRowsTable(rowsTable);
    }
  }, [data]);
  
  return (
    <InfoScreen>
      <ToastManager />
      <Title>
        {title}
        <Button
          color={"secondary"}
          icon={iconAdd}
          onClick={() => setAction("create")}
        >
          Criar
        </Button>
      </Title>
      <ContainerTabel>
        <TableCustom headers={headersTable} rows={rowsTable} />
      </ContainerTabel>
      <ModalsAcitions
        entity={entity}
        action={action}
        onClose={() => setAction(null)}
        row={rowSelected}
        mapColumns={mapColumns}
        editData={editData}
        deleteData={deleteData}
        createData={createData}
        updateData={updateData}
        addToast={addToast}
      />
    </InfoScreen>
  );
};

export default TableAction;
