import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./partials/Footer.css";
import { Image } from "../../elements/image";
import { FooterSubcribe } from "./partials/FooterSubcribe";
import { FooterSocial } from "./partials/FooterSocial";
import { FooterNav } from "./partials/FooterNav";
import { FooterBottom } from "./partials/FooterBottom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container>
          <Grid item md={4}>
            <Image
              src={require("../../../assets/images/white-logo.png")}
              width={150}
              style={{ marginBottom: "8px" }}
            />
            <Typography variant="p" component="div" className="subTitle">
              THE FUTURE OF BLOCKCHAIN DEVELOPMENT
            </Typography>
            <FooterSocial />
            <FooterSubcribe />
          </Grid>
          <Grid item md={8}>
            <FooterNav />
          </Grid>
        </Grid>
        <FooterBottom />
      </Container>
    </footer>
  );
};
