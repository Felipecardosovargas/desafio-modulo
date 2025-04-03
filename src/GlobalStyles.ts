// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #1f1f1f;
        color: white;
    }

    a {
        text-decoration: none; /* Remover sublinhado de links */
        color: inherit; /* Usar a cor do texto padrão */
    }

    button {
        cursor: pointer; /* Mudar o cursor para pointer em botões */
    }
`;

export default GlobalStyles;