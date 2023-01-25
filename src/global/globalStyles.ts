import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



:root {
    --white: #fff;
    --white-200: #F8F9FA;
    --white-300: #F5F8FA;
    --white-500: #E5E5E5;

    --gray-300: #F2F2F2;
    --gray-900: #706E8F;

    --red: ##FF0B3B;
    --red-500: #AF0B42;

    --purple: #110E2F

    --black-700: #1F1F1F;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
}

body {
  overflow-x: hidden;
  overflow-y: scroll;
  background: rgb(175,11,66);
  background: linear-gradient(14deg, rgba(175,11,66,1) 0%, rgba(17,14,47,1) 66%); 
  min-height: 100vh;
}

button {
  cursor: pointer;
}
`;