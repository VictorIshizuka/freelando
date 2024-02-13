import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    white: "#ffff",
    primary: {
      a: "#5754eD",
      b: "",
      c: "",
    },
    secondary: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutral: {
      a: "#373737",
    },
  },
  gaps: {
    s: "16px",
    l: "32px",
    m: "24px",
    xs: "8px",
    xl: "48px",
  },
  fontFamily: "'Montserrat', 'sans-serif'",
};
export const IsThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
