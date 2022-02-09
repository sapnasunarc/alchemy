import { makeStyles } from "@mui/styles";
import bannerImage from "../../../assets/images/cy-stripes-left-hero.png";

export const styling = makeStyles({
  teamWrapper: {
    paddingBottom: "40px",
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "0 0",
    backgroundSize: "20%",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
  },
  h2: {
    color: "#000",
    fontSize: "32px",
    lineHeight: "38px",
    fontWeight: "400",
    textAlign: "center",
    margin: "20px 0 10px",
  },
  p: {
    fontFamily: "Karla,sans-serif",
    color: "#767b81",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    maxWidth: "700px",
    margin: "0 auto",
  },
  teamImage: {
    display: "flex",
    margin: "60px 0 0",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  teamCard: {
    flexBasis: "150px",
    background: "#fff",
    margin: "0 8px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "144px",
    borderRadius: "16px",
    boxShadow: "0 8px 14px 0 rgb(0 0 0 / 6%)",
  },
  image: {
    margin: "0",
    maxWidth: "80%",
  },
});
