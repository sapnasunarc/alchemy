import { makeStyles } from "@mui/styles";

export const styling = makeStyles({
  title: {
    marginBottom: "8px",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "24px",
  },
  small: {
    marginBottom: "8px",
    color: "#aaa",
    fontSize: "12px",
    lineHeight: "1.6em",
  },
  inputClass: {
    margin: "0 0 15px 0!important",
    "& input": {
      maxWidth: "300px",
      minWidth: "250px",
      border: "1px solid hsla(0,0%,80%,.2)",
      borderRight: "transparent",
      borderRadius: "4px 0 0 4px",
      backgroundColor: "#222",
      color: "#fff",
      lineHeight: "44px",
      padding: "8px 12px",
      fontSize: "14px",
    },
    "& img": {
      border: "1px solid hsla(0,0%,80%,.2)",
      borderRadius: "0 4px 4px 0",
      backgroundColor: "#222",
      lineHeight: "44px",
      padding: "6px 12px",
      marginLeft: "-8px",
      cursor: "pointer",
    },
  },
  "@media (max-width:420px)": {
    inputClass: {
      "& input": {
        minWidth: "200px",
      },
    },
  },
});
