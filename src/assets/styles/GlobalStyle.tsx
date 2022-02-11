import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;

        /* Test start */
        background-color: grey;
        /* Test end */
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`