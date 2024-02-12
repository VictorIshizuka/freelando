import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
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
    neutral: {},
  },
  gaps: {
    s: "16px",
    l: "32px",
    m: "24px",
  },
  fontFamily: "'Montserrat', 'sans-serif'",
};
export const IsThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
