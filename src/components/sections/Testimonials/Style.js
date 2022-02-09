import { makeStyles } from "@mui/styles";

export const styling = makeStyles({
  content: {
    margin: "32px auto",
    color: "#000",
    fontSize: "24px",
    textAlign: "center",
    padding: "10px 20px",
    lineHeight: "1.6em",
  },
  h6: {
    marginTop: "8px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#333",
    fontSize: "14px",
    lineHeight: "20px",
  },
  p: {
    color: "#212122",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  "@media (max-width:990px)": {
    content: {
      margin: "0 auto",
    },
  },
});
