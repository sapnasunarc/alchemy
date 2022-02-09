import React from "react";
import { FeatureSuperNode } from "../../components/sections/SuperNode/FeatureSuperNode";
import { SuperNode } from "../../components/sections/SuperNode/SectionSuperNode";
import featureImage from "../../assets/images/supernode footer.svg";
import { FeatureSaveMoney } from "../../components/sections/SaveMoney/FeatureSaveMoney";
import { Container, Grid, Typography, Box } from "@mui/material";
import cryptokittiesLogo from "../../assets/images/cryptokitties_logo.png";
import { FeatureBanner } from "../../components/sections/Banner/FeatureBanner";
import featureBannerImage from "../../assets/images/dapper-hero.png";
import { Image } from "../../components/elements/image";
import "./Dapper.css";
import { FeatureSummery } from "../../components/sections/Summery/FeatureSummery";

export const Dapper = () => {
  const superNode = {
    subTitle: "ALCHEMY SUPERNODE - ETHEREUM NODE API",
    title: "Scale to any size, without any errors",
    paragraph:
      "Alchemy Supernode finally makes it possible to scale blockchain applications without all the headaches. Plus, our legendary support will guide you every step of the way.",
    button: "Get started for free",
    textColor: false,
  };
  const banner = {
    subTitle: "DAPPER",
    title:
      "Dapper Labs, creator of CryptoKitties, relies on Alchemy for infrastructure",
    paragraph:
      "Dapper Labs uses the power of play to deliver blockchain-based experiences.",
    textColor: true,
  };
  return (
    <>
      <FeatureBanner image={cryptokittiesLogo}>
        <SuperNode data={banner} />
        <Image src={featureBannerImage} className="bannerImage" />
      </FeatureBanner>
      <section className="studyStats">
        <Container>
          <Grid container>
            <Grid item md={4} xs={12}>
              <Box className="studyCard">
                <Typography variant="h2" component="h2">
                  2 Devs
                </Typography>
                <Typography variant="subtitle1">RE-RESOURCED</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="studyCard">
                <Typography variant="h2" component="h2">
                  7 Million
                </Typography>
                <Typography variant="subtitle1">QUERIES PER DAY</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box className="studyCard">
                <Typography variant="h2" component="h2">
                  1231 ETH
                </Typography>
                <Typography variant="subtitle1">TRANSACTIONS</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="quoteSection">
        <Container>
          <Typography variant="subtitle2" gutterBottom>
            "We haven’t had any issues using Alchemy. The Alchemy team is
            responsive, and overall the product is very stable."
          </Typography>
          <Typography variant="body1" gutterBottom>
            - ERIC LIN, DAPPER
          </Typography>
        </Container>
      </section>
      <FeatureSummery />
      <FeatureSaveMoney />
      <FeatureSuperNode image={featureImage}>
        <SuperNode data={superNode} />
      </FeatureSuperNode>
    </>
  );
};
