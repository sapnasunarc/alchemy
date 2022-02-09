import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  data: PropTypes.shape({
    subTitle: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    button: PropTypes.string,
    textColor: PropTypes.bool,
  }).isRequired,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
};

const defaultProps = {
  tag: "h2",
};

export const SuperNode = ({ data, tag, ...props }) => {
  const Component = tag;

  const styling = makeStyles({
    blueColor: {
      color: "#254cdd",
    },
  });
  const classes = styling();
  return (
    <>
      {(data.subTitle ||
        data.title ||
        data.paragraph ||
        data.button ||
        data.textColor) && (
        <div className="contentWrapper">
          {data.subTitle && (
            <Typography
              variant="subtitle1"
              className={data.textColor ? classes.blueColor : null}
            >
              {data.subTitle}
            </Typography>
          )}
          {data.title && <Component>{data.title}</Component>}
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

SuperNode.prototype = propTypes;
SuperNode.defaultProps = defaultProps;
