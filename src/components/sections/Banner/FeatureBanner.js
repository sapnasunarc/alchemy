import { Container, Grid } from "@mui/material";
import { Image } from "../../elements/image";
import "./FeatureBanner.css";

export const FeatureBanner = ({ image, banner, children }) => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            {children}
            {image ? <Image src={image} width={160} /> : null}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
