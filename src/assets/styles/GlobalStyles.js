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

    p {
      line-height: 2em;
      margin-left: 5px;
      font-family: 'Montserrat', sans-serif;
    }

    h2 {
      text-transform: uppercase;
      margin-left: 5px;
    }

    blockquote {
      border-left: 6px solid #edeff2;
      font-weight: 600;
    }
`;

export default GlobalStyle;
