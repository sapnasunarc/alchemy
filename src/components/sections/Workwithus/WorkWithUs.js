import { Button, Container, Grid, Typography } from "@mui/material";
import { styling } from "./Style.js";
import { Link } from "react-router-dom";
import { Image } from "../../elements/image";

export const WorkWithUs = () => {
  const classes = styling();
  return (
    <section className={classes.workWithUs}>
      <Container>
        <Grid
          container
          alignItems="center"
          style={{ maxWidth: "934px", margin: "0 auto" }}
        >
          <Grid item md={6} xs={12}>
            <Typography className={classes.h2}>Come work with us</Typography>
            <Typography className={classes.p}>
              Join us in shaping the future of the blockchain ecosystem.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" className={classes.button}>
                Apply now
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} xs={12}>
            <Image
              src={require("../../../assets/images/dashboard-applynow.png")}
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
