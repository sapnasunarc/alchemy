import { makeStyles } from "@mui/styles";

export const styling = makeStyles({
  blockChain: {
    textAlign: "center",
    padding: "32px 40px",
  },
  h6: {
    margin: "24px 0 16px",
    color: "#767b81",
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "4px",
    textTransform: "uppercase",
  },
  imageWrapper: {
    display: "grid",
    alignItems: "center",
    maxWidth: "1200px",
    gridAutoColumns: "1fr",
    gridColumnGap: "8px",
    gridRowGap: "8px",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "auto auto",
    margin: "24px auto",
    padding: "0 8px",
  },
  "@media (max-width:990px)": {
    imageWrapper: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  "@media (max-width:767px)": {
    imageWrapper: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
  "@media (max-width:420px)": {
    imageWrapper: {
      gridTemplateColumns: "1fr 1fr",
    },
  },
});
