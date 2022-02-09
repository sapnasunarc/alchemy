import { makeStyles } from "@mui/styles";

export const styling = makeStyles({
  bransAssets: {
    padding: "60px 0 80px",
    background:
      "linear-gradient(111deg,rgba(152,143,255,.27),rgba(221,218,255,.09) 58%,rgba(233,231,255,.85) 79%,#fff)",
  },
  title: {
    color: "#000",
    fontSize: "32px",
    lineHeight: "32px",
    fontWeight: "400",
    textAlign: "center",
  },
  gridBox: {
    alignItems: "center",
    maxWidth: "952px",
    margin: "40px auto 20px",
    gridAutoColumns: "1fr",
    gridColumnGap: "0px",
    gridRowGap: "16px",
    gridTemplateColumns: "2.25fr 1fr",
    gridTemplateRows: "repeat(auto-fit,minmax(240px,1fr))",
    borderRadius: "16px",
    backgroundColor: "#4c84ff",
    backgroundImage: "linear-gradient(295deg,#254cdd,#3898ec 21%,#3898ec)",
  },
  leftWrapper: {
    padding: "48px",
    borderRadius: "16px 0 0 16px",
    backgroundColor: "#fff",
    "& h3": {
      color: "#000",
      fontSize: "24px",
      fontWeight: "400",
      margin: "4px 0",
    },
    "& p": {
      margin: "1em 0 2.5em",
      color: "#767b81",
      fontSize: "16px",
      lineHeight: "1.8em",
      fontFamily: "Karla,sans-serif",
    },
    "& a": {
      color: "#7c62ff",
      fontSize: "14px",
      lineHeight: "1.8em",
      display: "inline-block",
      textDecoration: "none",
      padding: "5px 0",
    },
  },
  rightWraper: {
    textAlign: "center",
  },
  "@media(max-width:990px)": {
    img: {
      padding: "48px 0",
    },
    leftWrapper: {
      padding: "30px",
    },
    bransAssets: {
      padding: "30px 0",
    },
    gridBox: {
      marginTop: "20px",
    },
  },
});
