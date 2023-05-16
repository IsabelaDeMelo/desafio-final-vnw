import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
}
`;

export const theme = {
  colors: {
    orangeBtn: "#d53a00",
    greyTrailerBtn: "#717171",
    greyMoviesBtn: "#747474",
    text: "#f6f6f6",
    white: "#ffffff",
    black: "#000000",
    yellow: "#f6c700",
  },
};
