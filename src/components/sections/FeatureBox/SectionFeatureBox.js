import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "../../elements/image";

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
  }).isRequired,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  tag: "h2",
};

export const SectionFeatureBox = ({ data, tag, ...props }) => {
  return (
    <>
      {(data.src || data.title || data.paragraph || data.button) && (
        <div>
          {data.src && <Image src={data.src} width={40} />}
          {data.title && <Typography component="h2">{data.title}</Typography>}
          {data.paragraph && (
            <Typography component="p">{data.paragraph}</Typography>
          )}
          {data.button && (
            <Link to="#">
              <Button variant="contained">{data.button}</Button>
            </Link>
          )}
        </div>
      )}
    </>
  );
};

SectionFeatureBox.prototype = propTypes;
SectionFeatureBox.defaultProps = defaultProps;
