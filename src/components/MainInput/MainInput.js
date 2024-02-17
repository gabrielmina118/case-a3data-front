import React from "react";
import { Input } from "./styled";

const MainInput = ({ value, onChange, placeholder, type, name }) => {
    return (
        <Input>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </Input>
    );
};

export default MainInput;
