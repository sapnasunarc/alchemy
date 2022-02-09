import { Box, Container, Grid } from "@mui/material";
import { Image } from "../../elements/image";
import "./FeatureSuperNode.css";

export const FeatureSuperNode = ({ children, image }) => {
  return (
    <section className="featureNode">
      <Container>
        <Box>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item md={6}>
              {children}
            </Grid>
            <Grid item md={6} align="center">
              <Image src={image} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};
