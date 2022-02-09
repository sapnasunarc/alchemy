import { Container } from "@mui/material";
import { TestimonialContent } from "./TestimonialContent";
import { Review } from "../Reviews/ReviewStyling";

export const Testimonials = ({ data }) => {
  return (
    <Review>
      <Container>
        <TestimonialContent data={data} />
      </Container>
    </Review>
  );
};
