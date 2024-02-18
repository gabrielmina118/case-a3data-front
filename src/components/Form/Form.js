import { useEffect, useState } from "react";
import { ContainerInput, FormStyled, Label } from "./styled";
import InputGeneric from "./InputGeneric";

const Form = ({ mapColumns, submit, initialForm, footer, subtitle, size }) => {
  const [form, setForm] = useState(initialForm || {});

  useEffect(() => {
    if (!initialForm || initialForm?.id === form?.id) return;
    setForm(initialForm);
  }, [initialForm]);

  const onChange = (e, mask) => {
    e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    
    setForm({ ...form, [key]: mask ? mask(value) : value });

  };
  const onChangeValue = (key, value) => {
    setForm({ ...form, [key]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await submit(form);
  };
  return (
    <FormStyled onSubmit={onSubmit} size={size}>
      {subtitle && <p>{subtitle}</p>}
      {mapColumns?.map((column, index) => {
        if (column.edit === false) return null;
        return (
          <ContainerInput key={index}>
            <Label>{column.text}</Label>
            <InputGeneric column={column} onChange={onChange} form={form} onChangeValue={onChangeValue}/>
          </ContainerInput>
        );
      })}
      {footer}
    </FormStyled>
  );
};
export default Form;
