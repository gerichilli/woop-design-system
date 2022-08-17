import { createGlobalStyle } from "styled-components";
import { typography } from "./styles";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 1rem; 
        box-sizing: border-box;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${typography.type.primary};
        font-size: ${typography.size.s3};
        font-weight: ${typography.weight.regular};
        line-height: ${typography.leading.default};

        overflow-x: hidden;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;
    }

    main {

    }
`;
