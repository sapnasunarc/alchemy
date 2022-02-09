import { Box, Container, Grid, Typography } from "@mui/material";
import { Image } from "../../elements/image";
import { Reviews } from "./Reviews";
import { styling } from "./ReviewStyling.js";

export const FeatureReview = () => {
  const classes = styling();

  return (
    <>
      <Container className={classes.container}>
        <Grid container>
          {Reviews.map((review, i) => (
            <Grid key={i} item md={6}>
              <Box>
                <Grid container>
                  <Grid item md={5} xs={12}>
                    <Box className={classes.founderImage}>
                      <Image src={review.src} />
                    </Box>
                  </Grid>
                  <Grid item md={7} xs={12}>
                    <Typography component="p" className={classes.founderName}>
                      {review.name}
                    </Typography>
                    <Typography
                      component="p"
                      className={classes.founderJobPost}
                    >
                      {review.jobPost}
                    </Typography>
                    <Typography component="p" className={classes.content}>
                      {review.content}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
