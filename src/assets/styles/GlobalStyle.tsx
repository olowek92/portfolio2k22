import { createGlobalStyle } from "styled-components";
import homeBackground from 'assets/images/bcg_all_back_with_person_main.png';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: url(${homeBackground});
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        overflow: hidden;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`