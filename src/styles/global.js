import {
    createGlobalStyle
} from "styled-components";

export default createGlobalStyle`
    :root{
        font-size: 62.8%;
        -webkit-font-smoothing: antialiased;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme })=> theme.COLORS.WHITE};
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter:brightness(0.9);
    }
`