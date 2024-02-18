import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  :root{
    --logo:#00033D;
    --letter-logo:#FFC600;
    --menu-size-min: 260px;
    --menu-size-max: 300px;
    --primary-color: #001863;
    --danger-color: #FF6666;
    --information-color: #06bec6;
    --secondary-color: #06bec6;
    --success-color: #00cc66;
  }

  body {
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color:white;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;
