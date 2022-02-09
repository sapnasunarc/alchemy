import { Box, Container, Grid, Typography } from "@mui/material";
import { Image } from "../../components/elements/image";
import { SectionBrandAssets } from "../../components/sections/BrandAssets/SectionBrandAssets";
import { FeatureBlockChain } from "../../components/sections/BlockChain/FeatureBlockChain";
import { FeatureInvestors } from "../../components/sections/Investors/FeatureInvestors";
import { LeadingInvestors } from "../../components/sections/Investors/LeadingInvestrs";
import { FeatureReview } from "../../components/sections/Reviews/FeatureReview";
import { FeatureTeam } from "../../components/sections/Team/FeatureTeam";
import { WorkWithUs } from "../../components/sections/Workwithus/WorkWithUs";
import "./Company.css";

export const Company = () => {
  return (
    <>
      <section className="companyBanner">
        <Container>
          <Typography component="small">THE ALCHEMY VISION</Typography>
          <Typography variant="h1" component="h1">
            Bring blockchain to a billion people
          </Typography>
          <iframe
            width="100%"
            height="656"
            src="https://www.youtube.com/embed/HFs5XA2Xmac"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </section>
      <FeatureBlockChain />
      <section className="techContainer">
        <Container>
          <Typography variant="h2" component="h2">
            Enabling the next great shift in technology
          </Typography>
          <Typography component="p">
            Alchemy is the platform layer needed to empower developers to build
            great applications that tap into the blockchain revolution
          </Typography>
          <Image src={require("../../assets/images/9grid-p-1080.png")} />
        </Container>
      </section>
      <section className="aboutUs">
        <Container className="container">
          <Box className="aboutContent">
            <Typography component="small">WHO WE ARE</Typography>
            <Typography variant="h2" component="h2">
              Empowering blockchain developers everywhere
            </Typography>
            <Typography component="p">
              Alchemy provides the leading blockchain development platform
              powering millions of users in 197 countries worldwide. Our mission
              is to provide developers with the fundamental building blocks they
              need to create the future of technology.
            </Typography>
            <Typography component="p">
              The Alchemy team draws from decades of deep expertise in massively
              scalable infrastructure, AI, and blockchain from leadership roles
              at technology pioneers like Google, Microsoft, Facebook, Stanford,
              and MIT. Backed by Stanford University, Coinbase, the Chairman of
              Google, Charles Schwab, and founders and executives of globally
              leading organizations, Alchemy powers billions of dollars of
              transactions for top companies around the world. The computer and
              internet fundamentally improved human life on planet earth. We’re
              excited to help enable the global opportunity of blockchain - the
              next tectonic shift.
            </Typography>
          </Box>
          <Box className="aboutImage"></Box>
        </Container>
      </section>
      <FeatureReview />
      <section className="investorContent">
        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Typography component="small">
                BACKED BY LEADING INVESTORS
              </Typography>
              <Typography variant="h3" component="h3">
                Alchemy's investors include top founders, execs, and
                institutions in the technology industry
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="teamImage">
                {LeadingInvestors.map((investor, i) => (
                  <Box key={i} className="teamCard">
                    <Image src={investor.src} className="image" />
                  </Box>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <FeatureInvestors />
      <FeatureTeam />
      <WorkWithUs />
      <SectionBrandAssets />
    </>
  );
};
