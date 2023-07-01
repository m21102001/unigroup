import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import AbcIcon from '@mui/icons-material/Abc';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import "./Form.css";

const Signup = () => {

  const intialValues = { fullname: "", email: "", birthday:"", address: "", textarea: "", chossefile: "", gender: "", educationlevel: "", whichGrade: "" };
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

    // if (!values.fullname) {
    //   errors.fullname = "Cannot be blank";
    // } else{
    //   errors.fullname = "Invalid email format";
    // }

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
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
          <h2>Sign up</h2>
          <div className="input-icons-div mb-3 ">
            <input
              type="text"
              name="fullname"
              className="form-control"
              id="fullname"
              value={formValues.fullname}
              onChange={handleChange}
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Fullname"
              required
              pattern="^[A-Za-z]{3,16}$"
              // {formErrors.fullname && (
              //   <span className="error">{formErrors.fullname}</span>
              // )}
            />
          </div>
          <div className="input-icons-div form-floating mb-3 ">
            <input
              type="email"
              name="email"
              className="form-control"
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
          <div className="input-icons-div mb-3 ">
            <input
              type="date"
              name="birthday"
              className="form-control"
              id="birthday"
              value={formValues.birthday}
              onChange={handleChange}
              // onChange={(e) => setaddress(e.target.value)}
              placeholder="Birthday"
              required
            />
          </div>
          <div className="input-icons-div mb-3 ">
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              value={formValues.address}
              onChange={handleChange}
              // onChange={(e) => setaddress(e.target.value)}
              placeholder="address"
            />
          </div>
          <div className="mb-3">
            <textarea
              type="text"
              name="textarea"
              id="textarea"
              className="form-control"
              rows="3"
              value={formValues.textarea}
              onChange={handleChange}
              placeholder="Additional info"
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              name="chossefile"
              className="form-control"
              type="file"
              id="chossefile"
              value={formValues.chossefile}
              onChange={handleChange}
            // accept=".jpg,.jpeg, .png"
            />
          </div>
          <div className="input-group mb-3">
            <select
              name="gender"
              className="form-select"
              id="gender"
              value={formValues.gender}
              onChange={handleChange}
            >
              <option selected>Gender...</option>
              <option value="1">Mail</option>
              <option value="2">Femail</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              name="educationlevel"
              className="form-select"
              id="educationlevel"
              value={formValues.educationlevel}
              onChange={handleChange}
            >
              <option selected>Education Level...</option>
              <option value="1">Current Education</option>
              <option value="2">graduation</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              name="whichGrade"
              className="form-select"
              id="whichGrade"
              value={formValues.whichGrade}
              onChange={handleChange}
            >
              <option selected>Which Grade...</option>
              <option value="1">Under graduation</option>
              <option value="2">graduation</option>
            </select>
          </div>

          {/* <button type="submit">Submit</button> */}
          <Button
          type="submit"
                className='buttonGroup mt-4'
                onClick={() => { }}
                style={
                  {
                    paddingTop:'.2rem',
                    backgroundColor: "rgb(249 161 58)",
                    width: "20%"
                  }
                }
              >
                submit
              </Button>

        </form>
      </div>
    </div>
  );
};

export default Signup;

