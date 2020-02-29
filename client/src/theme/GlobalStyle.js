import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  h1 {
    margin: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    padding-top: 110px;
  }
`;

export default GlobalStyle;
