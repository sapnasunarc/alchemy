import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Image } from "../../elements/image";
import "./FeatureCard.css";

export const FeatureBox = ({ boxImage, children }) => {
  return (
    <section>
      <Container>
        <Grid container className="featureCard">
          <Grid item md={6}>
            <Box className="leftWrapper">{children}</Box>
          </Grid>
          <Grid item md={6}>
            <Image src={boxImage} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
