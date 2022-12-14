export default function validate(values) {
  let errors = {};

  if (!values.person) {
    errors.person = "Name required";
  }
  if (!values.company) {
    errors.company = "Company required";
  }
  if (!values.message) {
    errors.message = "Message required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
