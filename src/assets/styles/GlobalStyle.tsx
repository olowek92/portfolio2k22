import { createGlobalStyle } from "styled-components";
import mobileBackground from 'assets/images/Mobile.png';
import tabletBackground from 'assets/images/Tablet.png';
import desktopBackground from 'assets/images/bcg_all_back_with_person_main.png';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: url(${mobileBackground});
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        overflow: hidden;
    }

    @media(min-width: 768px) {
        body {
            background-image: url(${tabletBackground});
        }
    }

    @media(min-width: 992px) {
        body {
            background-image: url(${desktopBackground});
        }
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`