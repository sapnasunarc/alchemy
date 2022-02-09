export const validate = (values) => {
  let errors = [];
  if(!values.email){
      errors.email = 'Email Address is requird.';
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email Address is invalid.';
  }
  return errors;
}