import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

    }

    body, button, input {
        background-color: ${({ theme }) => theme.COLORS.DARK_COLOR};
        -webkit-font-smoothing: antialised;
        color: ${({ theme }) => theme.COLORS.LIGHT_COLOR};

        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
    }

    h1 {
        font-family: "Teko", sans-serif;
    }

    button {
        cursor: pointer;
        transition: 0.2s ease-in-out;
    }

    button:hover, a:hover{
        filter: brightness(1.4);
    }
`;