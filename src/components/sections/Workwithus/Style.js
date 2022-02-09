import { makeStyles } from "@mui/styles";
import workbanner from "../../../assets/images/cy-stripe-right-hero.png";
export const styling = makeStyles({
  workWithUs: {
    backgroundColor: "#344180",
    backgroundImage: `url(${workbanner})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: "0 0",
    backgroundSize: "contain",
  },
  h2: {
    fontSize: "40px",
    lineHeight: "44px",
    fontWeight: "400",
    color: "#fff",
    margin: "16px 0 8px",
    maxWidth: "70%",
  },
  p: {
    fontSize: "16px",
    lineHeight: "1.8em",
    fontWeight: "400",
    fontFamily: "Karla,sans-serif",
    margin: "8px 0 24px",
    color: "#fff",
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#000",
    boxShadow: "4px 4px 15px 0 rgb(0 0 0 / 20%)",
    textTransform: "inherit",
  },
  "@media(max-width:990px)": {
    workWithUs: {
      textAlign: "center",
    },
    h2: {
      maxWidth: "100%",
    },
    button: {
      display: "block",
      width: "80%",
      margin: "0 auto",
    },
    img: {
      maxWidth: "250px",
      margin: "40px auto 0",
    },
  },
});
