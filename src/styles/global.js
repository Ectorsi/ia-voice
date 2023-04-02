
import {
    createGlobalStyle,
    css,
} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
    ${() => css`
        html {
            font-size: 62.5%;
        }
        body {
            font-family: 'Roboto';
            font-size: 1.6rem;
            width: 100vw;
            height: 100vh;
            background-color: #21222c;
        }
    `}
`;

export default GlobalStyles;