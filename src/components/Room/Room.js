import React, { useState } from "react";
import { MainRoom, RegisterInfo } from "./styled.js";
import MainInput from "../MainInput/MainInput.js";
import ButtonCustom from "../Button/Button.js";

const Room = () => {
    const [roomName, setRoomName] = useState("");
    const [rooms, setRooms] = useState([]);

    return (
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
                <ButtonCustom>Adicionar Sala</ButtonCustom>
            </RegisterInfo>
            <h2>Salas Cadastradas</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome da Sala</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.name}</td>
                            <td>
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </MainRoom>
    );
};

export default Room;
