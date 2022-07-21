import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --darkColor: #100D22;
  --colorWhite: #fff;
  --redColor: #F85F5A;
  --greenColor: #1CCB46;
  --yellowColor:#FBBB2D;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

body {
  background: var(--darkColor);
  color: var(--colorWhite);
  font-family: 'Inter', sans-serif;

}
`;
