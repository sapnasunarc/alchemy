import { FormControl, Input, InputAdornment, Typography } from "@mui/material";
import { styling } from './SubscribeStyle'
import { Image } from "../../../elements/image";
import arrow from "../../../../assets/images/arrow-narrow-right.svg";
import { validate } from "./FormValidate";
import useForm from "./SubscribeForm";

export const FooterSubcribe = () => {
  
  const classes = styling();
  const {
    values,
    errors,
    message,
    handleChange,
    handleSubmit
} = useForm(validate);

  return (
    <div className="footerSubscribe">
      <form onSubmit={handleSubmit}>
      <Typography component="p" className={classes.title}>
          Supercharge your inbox
        </Typography>
        <Typography component="p" className={classes.small}>
          Sign up for our developer newsletter:
        </Typography>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          className={classes.inputClass}
        >
          <Input
            id="standard-adornment-email"
            type="email"
            variant="outlined"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            name="email"
            required
            endAdornment={
              <InputAdornment position="end">
                <Image src={arrow} className={classes.arrow} />
              </InputAdornment>
            }
          />
          {errors.email && (
            <Typography component="p">{errors.email}</Typography>
          )}
        </FormControl>
        <Typography
          component="p"
          style={{ display: message ? "block" : "none" }}
        >
          Thank You!
        </Typography>
      </form>
    </div>
  );
};
