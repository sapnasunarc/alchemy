import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Image } from "../../elements/image";
import "./FeatureMoney.css";

export const FeatureSaveMoney = () => {
  return (
    <section className="featureMoney">
      <Container>
        <h2>Save money. Ship faster.</h2>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item md={4} xs={12}>
            <Box className="card">
              <Image
                src={require("../../../assets/images/card-icon.png")}
                width={40}
              />
              <Typography variant="h3">$35 million</Typography>
              <Typography component="p">
                WORTH OF ENGINEERING HOURS SAVED (2,025 DAYS)
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className="card">
              <Image
                src={require("../../../assets/images/bolt-icon.png")}
                width={40}
              />
              <Typography variant="h3">30% faster</Typography>
              <Typography component="p">
                RELEASE CYCLES DRIVING 289% USAGE GROWTH
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
