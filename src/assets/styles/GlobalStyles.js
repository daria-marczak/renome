import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Lato, sans-serif;
    }

    main {
      overflow: hidden;
    }

    .gatsby-image-wrapper {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
`;

export default GlobalStyle;
