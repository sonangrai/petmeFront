import styled from "styled-components";

/**
 * This file will contain all the theme realted variables like colors, fontSize, fontWeight etc for the styled-components
 */
export const theme = {
  //Colors
  primaryColor: "#16d3c1",
  black: "#4a4949",
  white: "#fff",
  grey: "#999696",
  lightGrey: "#c7c3c3",
  danger: "#e10a0a",
  success: "#12ce28",

  modalbackdrop: "#00000054",

  //Font Weights
  fntWgtLight: "300",
  fntWgtRegular: "400",
  fntWgtBold: "600",

  //Brand Font
  brandFont: "'Dancing Script', cursive",
};

export const Main = styled.main`
  min-height: 95vh;
`;
