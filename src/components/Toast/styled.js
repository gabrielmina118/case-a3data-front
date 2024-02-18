import { styled } from "styled-components";

const colors = {
  primary: "var(--primary-color)",
  secondary: "var(--secondary-color)",
  success: "var(--success-color)",
  danger: "var(--danger-color)",
  error: "var(--danger-color)",
};

export const ToastContainer = styled.div`
  padding: 10px;
  background-color: ${(props) => colors[props.type] || colors.primary};
  color: #000;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

export const ToastsContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  z-index: 2;
`;
