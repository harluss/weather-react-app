import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, 
  ::after, 
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, 
  a, 
  button {
    font-family: 'Montserrat', sans-serif;
  }
`;
