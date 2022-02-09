import { makeStyles } from "@mui/styles";

export const styling = makeStyles({
  investor: {
    textAlign: "center",
  },
  small: {
    color: "#212122",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  investorsList: {
    display: "grid",
    margin: "60px 0",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridColumnGap: "16px",
    gridRowGap: "16px",
  },
  name: {
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "500",
    letterSpacing: "2px",
    color: "#212122",
    textTransform: "uppercase",
  },
  jobPost: {
    fontFamily: "Karla,sans-serif",
    color: "#aaa",
    fontSize: "13px",
    lineHeight: "1.6em",
  },
  "@media(max-width:990px)": {
    investorsList: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    },
  },
  "@media(max-width:568px)": {
    investorsList: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  "@media(max-width:420px)": {
    investorsList: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});
