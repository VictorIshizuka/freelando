import { Global } from "@emotion/react";
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
