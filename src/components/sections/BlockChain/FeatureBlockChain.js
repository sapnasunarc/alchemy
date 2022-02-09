import { Box, Typography } from "@mui/material";
import { styling } from "./Style.js";
import React from "react";
import { Image } from "../../elements/image";
import { CompanyLogo } from "./CompanyLogo";

export const FeatureBlockChain = () => {
  const classes = styling();

  return (
    <section className={classes.blockChain}>
      <Typography variant="subtitle1" className={classes.h6}>
        POWERING THE BEST IN BLOCKCHAIN
      </Typography>
      <Box m="auto" className={classes.imageWrapper}>
        {CompanyLogo.map((images, i) => (
          <Image key={i} src={images.src} />
        ))}
      </Box>
    </section>
  );
};
