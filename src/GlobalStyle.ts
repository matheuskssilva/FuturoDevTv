import { createGlobalStyle } from 'styled-components';
import Theme from './theme'

const GlobalStyles = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${Theme.background};
  }
`;

export default GlobalStyles;