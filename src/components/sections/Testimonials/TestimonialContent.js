import { Typography } from "@mui/material";
import { styling } from "./Style.js";
import PropTypes from "prop-types";
import { Image } from "../../elements/image";

const propTypes = {
  data: PropTypes.shape({
    userName: PropTypes.string,
    userPost: PropTypes.string,
    paragraph: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    UserImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      .isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
  }).isRequired,
};

export const TestimonialContent = ({ data, ...props }) => {
  const classes = styling();

  return (
    <>
      {(data.userName || data.userPost || data.paragraph || data.src) && (
        <div>
          {data.src && <Image src={data.src} width={120} />}
          {data.paragraph && (
            <Typography component="p" className={classes.content}>
              {data.paragraph}
            </Typography>
          )}
          {data.UserImage && <Image src={data.UserImage} />}
          {data.userName && (
            <Typography variant="subtitle1" className={classes.h6}>
              {data.userName}
            </Typography>
          )}
          {data.userPost && (
            <Typography component="p" className={classes.p}>
              {data.userPost}
            </Typography>
          )}
        </div>
      )}
    </>
  );
};

TestimonialContent.prototype = propTypes;
