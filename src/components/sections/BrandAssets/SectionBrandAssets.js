import { Box, Container, Grid, Typography } from "@mui/material";
import { styling } from "./Style.js";
import { Link } from "react-router-dom";
import { Image } from "../../elements/image";
import logo from "../../../assets/images/white-logo.png";

export const SectionBrandAssets = () => {
  const classes = styling();
  return (
    <section className={classes.bransAssets}>
      <Container>
        <Typography variant="h2" component="h2" className={classes.title}>
          Brand Assets
        </Typography>
        <Grid container className={classes.gridBox}>
          <Grid item md={8} xs={12}>
            <Box className={classes.leftWrapper}>
              <Typography variant="h3" component="h3" className={classes.h3}>
                Alchemy Press Kit
              </Typography>
              <Typography component="p" className={classes.p}>
                The Alchemy logo is available in three colors.
              </Typography>
              <Link to="/" className={classes.a}>
                ↓ Download press kit
              </Link>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className={classes.rightWraper}>
              <Image src={logo} width={250} className={classes.img} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
