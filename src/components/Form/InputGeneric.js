import { useEffect, useState } from "react";
import { Input, Select } from "./styled";
import app from "../../constants/app";

const maskNumber = (value) => {
  return Number(value.replace(/\D/g, ""));
};
const masks = {
  number: maskNumber,
  default: (value) => value,
};
const InputText = ({ column, onChange, form, type }) => {
  return (
      <Input
          value={form[column.key] || ""}
          onChange={(e) => onChange(e, masks[type])}
          name={column.key}
          placeholder={column.text}
      ></Input>
  );
};

const InputList = ({ column, onChange, form }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const getOptions = async () => {
      const response = await app.get(column.pathSearch);
      setOptions(response.data.data);
    };
    getOptions();
  }, [column.pathSearch]);
  return (
    <Select
      value={form[column.key] || ""}
      name={column.key}
      type={column.type}
      onChange={(e) => onChange(e, masks[column.type])}
    >
      {options.map((option, index) => (
        <option key={index} value={option[column.keySearch]}>
          {option[column.textSearch]}
        </option>
      ))}
    </Select>
  );
};
const InputGeneric = ({ column, onChange, form }) => {
  if (column.list) {
    return <InputList column={column} onChange={onChange} form={form} type={column.type} />;
  }
  return <InputText column={column} onChange={onChange} form={form} type={column.type} />;
};

export default InputGeneric;
