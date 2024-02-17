import React, { useEffect, useState } from "react";
import { MainRoom, RegisterInfo, InfoScreen } from "./styled.js";
import MainInput from "../MainInput/MainInput.js";
import ButtonCustom from "../Button/Button.js";
import axios from "axios";
import { URL_API } from "../../constants/url.js";
import TableCustom from "../Table/Table.js";
import ButtonTableGroup from "../Button/ButtonTable.js";
import ModalRegisterInfo from "../Modal/ModalRegister.js";

const Room = () => {
    const [roomName, setRoomName] = useState("");
    const [rooms, setRooms] = useState([]);
    const headersTable = ["ID", "Número da Sala", "Ações"];
    const [showModal, setShowModal] = useState(false);

    const getAllRooms = async () => {
        try {
            const response = await axios.get(`${URL_API}/room`);
            setRooms(response.data.data);
        } catch (error) {
            console.error("Erro ao obter as salas:", error);
        }
    };

    useEffect(() => {
        getAllRooms();
    }, []);

    const data = rooms.map((room) => [
        room.id,
        room.numberRoom,
        <ButtonTableGroup />,
    ]);

    const addRoom = async () => {
        const room = {
            numberRoom: Number(roomName),
        };

        if (room.numberRoom > 0) {
            console.log("ROOM");
            try {
                await axios.post(`${URL_API}/room`, room);

                setShowModal(true);
                await getAllRooms();
            } catch (error) {
                console.error(
                    "Erro ao obter as salas:",
                    error.response.data.message
                );
            }
        }
    };

    return (
        <>
            <MainRoom>
                <h2>Cadastro de Sala</h2>
                <RegisterInfo>
                    <MainInput
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        placeholder="Numero da sala"
                        name={"sala"}
                        type={"number"}
                    />
                    <ButtonCustom onClick={() => addRoom()}>
                        Adicionar Sala
                    </ButtonCustom>
                </RegisterInfo>
                <InfoScreen>
                    <h2>Salas Cadastradas</h2>
                    <TableCustom headers={headersTable} data={data} />
                </InfoScreen>
            </MainRoom>
            {showModal ? <ModalRegisterInfo /> : <></>}
        </>
    );
};

export default Room;
