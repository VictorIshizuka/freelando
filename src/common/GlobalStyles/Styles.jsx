import { Global } from "@emotion/react";
import { Hidden } from "react-grid-system";

const styles = (theme) => {
  return {
    html: {
      fontFamily: theme.fontFamily,
    },
    body: {
      margin: 0,
      padding: 0,
      "overflow-x": "hidden",
    },
  };
};
export const Styles = () => {
  return <Global styles={styles} />;
};
