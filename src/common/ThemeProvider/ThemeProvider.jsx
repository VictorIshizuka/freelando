import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    white: "#ffff",
    warning: "#FF0E0E",
    focus: "#B009FF",
    primary: {
      a: "#5754eD",
      b: "#D93114",
      c: "#168070",
    },
    secondary: {
      a: "#EBEAF9",
      b: "#FDF8FD",
      c: "#EBFCF9",
    },
    neutral: {
      a: "#373737",
      b: "#E8E8E8",
      c: "#F5F5F5",
    },
    dark: {
      a: "#110EA0",
      b: "#B61B00",
    },
  },
  gaps: {
    xxs: "4px",
    xs: "8px",
    s: "16px",
    l: "32px",
    m: "24px",
    xl: "48px",
    xxl: "64px",
  },
  fontFamily: "Montserrat, sans-serif",
};
export const IsThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
