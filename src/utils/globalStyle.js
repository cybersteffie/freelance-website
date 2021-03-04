import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
                                  
    color: ${({ theme }) => theme.colors.text} !important;
  }

  p, .p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 300;
    letter-spacing: -0.56px;
    line-height: 30px;
    margin-bottom: 0;
  }

  ul,.ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    -moz-user-select: none;
 -webkit-user-select: none;
 -ms-user-select: none;
 user-select: none;
 -webkit-user-drag: none;
 user-drag: none;
 -webkit-touch-callout: none;
  }


  a {
    transition: all 0.3s ease-out;
    color: ${({ theme }) => theme.colors.heading} !important;
    &:hover, &:active, &:focus{
      text-decoration: none!important;
      outline: none !important;
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input[type="number"] {
      -moz-appearance: textfield; /* Firefox */
    }

    button {
      padding: 10px;
    }
`;

export default globalStyle;
