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

        --envelop-icon: #F59800;
        --whatsapp-icon: #25D366;
        --linkedin-icon: #0a66c2;
        --github-icon: #0D1117;
        --js-color: #f7e018;
        --react-color: #61dbfb;
        --html-color: #ff5722;
        --css-color: #2196f3;
        --git-color: #f05033;

        --ts-main-filter: invert(35%) sepia(28%) saturate(264%) hue-rotate(172deg) brightness(96%) contrast(90%);
        --ts-hover-filter: invert(40%) sepia(74%) saturate(506%) hue-rotate(169deg) brightness(95%) contrast(98%);

    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
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

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;

export default GlobalStyles;