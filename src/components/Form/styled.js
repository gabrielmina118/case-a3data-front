import { styled } from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  gap: 1rem;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  font-size: 16px;
`;
export const Select = styled.select`
  width: 100%;
  padding: 10px 50px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-left: 0.5rem;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
  align-items: start;
`;
