import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import emailIcon from "../assests/email.png";
// import avatarIcon from "../assests/avatar.png";
// import locationIcon from "../assests/location.png";
// import lockIcon from "../assests/padlock.png";
import AbcIcon from '@mui/icons-material/Abc';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import "./Form.css";

const Signup = () => {

  const intialValues = { username: "", email: "", password: "", location: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 8) {
      errors.password = "must be more than 8 ";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="form-container">
      <div className="form-div container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="">Form submitted successfully</span>
        )}

        {/* <form onSubmit={submitHandler}> */}
        <form onSubmit={handleSubmit} noValidate>
          {/* <h2>Sign up</h2> */}
          <div className="input-icons-div  ">
            <img src={<AbcIcon/>} />
            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={handleChange}
              required
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Fullname"
            />
          </div>
          <div className="input-icons-div  ">
            <img src={<EmailIcon/>} />
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              // className={formErrors.email && "input-error"}
              // type="email"
              required
              // onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="input-icons-div  ">
            <img src={<LockIcon/>} />
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
              // type="password"
              required
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <div className="input-icons-div  ">
            <img src={<LocationOnIcon/>} />
            <input
              type="text"
              name="location"
              id="location"
              value={formValues.location}
              onChange={handleChange}
              // onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />

          </div>
          <div className="form-checkbox-div ">
            <input type="checkbox" required />
            <p>
              I agree with <span>Terms</span> and
              <span>Privacy</span>
            </p>
          </div>
          <button type="submit">Submit</button>
          <p>
            Do you have an account already ?
            <span>
              <Link to={"/login"}> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

