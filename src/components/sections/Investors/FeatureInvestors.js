import { Box, Container, Typography } from "@mui/material";
import { styling } from "./Style.js";
import { Image } from "../../elements/image";
import { Investors } from "./Investors";

export const FeatureInvestors = () => {
  const classes = styling();
  return (
    <section className={classes.investor}>
      <Container>
        <Typography component="small" className={classes.small}>
          INVESTORS
        </Typography>
        <div className={classes.investorsList}>
          {Investors.map((investor, i) => (
            <Box key={i}>
              <Image src={investor.src} width={100} />
              <Typography component="p" className={classes.name}>
                {investor.name}
              </Typography>
              <Typography component="p" className={classes.jobPost}>
                {investor.jobPost}
              </Typography>
            </Box>
          ))}
        </div>
      </Container>
    </section>
  );
};
