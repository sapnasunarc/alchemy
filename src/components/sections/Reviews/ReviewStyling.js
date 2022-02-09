import styled from "styled-components";
import { makeStyles } from "@mui/styles";
import bgImage from "../../../assets/images/founder-bg-1.png";

export const Review = styled.section`
  text-align: center;
  max-width: 940px;
  margin: 0 auto;
`;

export const styling = makeStyles({
  founderName: {
    fontSize: "14px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#212122",
    fontWeight: "700",
    margin: "8px 0",
  },
  founderJobPost: {
    fontFamily: "Karla,sans-serif",
    color: "#767b81",
    fontSize: "16px",
    lineHeight: "1.8em",
    fontWeight: "400",
    margin: "0 0 16px",
  },
  content: {
    fontFamily: "Rubik,sans-serif",
    color: "#767b81",
    fontSize: "14px",
    lineHeight: "1.8em",
    fontWeight: "400",
    margin: " 0 0 1.6em",
  },
  founderImage: {
    padding: "0 0 60px 60px",
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "0 90%",
    backgroundSize: "180px",
    backgroundRepeat: "no-repeat",
    marginRight: "16px",
    "& img": {
      width: "194px",
      height: "auto",
      minHeight: "auto",
      borderRadius: "10px",
    },
  },
  container: {
    margin: "60px auto 70px",
  },
  "@media(max-width:420px)": {
    container: {
      marginBottom: "40px",
    },
  },
});
