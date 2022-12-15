import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        /* Fonts */
        --main-font: 'Poppins', sans-serif;
        --default-text-size: 1.6rem;

        /* Cores */
        --main-color: #6730E3;
        --secondary-color: #9629e6;
        --third-color: #007bff;
        --main-button-color: #6730E3;
        --secondary-button-color: #007bff;
        --text-color: #545f6c;

    }

    html {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--main-font);
        font-size: var(--default-text-size);
        color: var(--text-color);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }
`;

export default GlobalStyles;