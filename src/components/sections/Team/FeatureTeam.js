import { Box, Container, Typography } from "@mui/material";
import { Image } from "../../elements/image";
import { EngineerTeam } from "./EngineerTeam";
import { styling } from "./Style.js";

export const FeatureTeam = () => {
  const classes = styling();

  return (
    <section className={classes.teamWrapper}>
      <Container>
        <Typography className={classes.h2}>
          World-class engineering team
        </Typography>
        <Typography component="p" className={classes.p}>
          Alchemy's team brings decades of industry experience in massively
          scalable infrastructure and artificial intelligence from Stanford,
          MIT, Google, Facebook, Microsoft, and other top companies.
        </Typography>
        <div className={classes.teamImage}>
          {EngineerTeam.map((team, i) => (
            <Box key={i} className={classes.teamCard}>
              <Image src={team.src} className={classes.image} />
            </Box>
          ))}
        </div>
      </Container>
    </section>
  );
};
