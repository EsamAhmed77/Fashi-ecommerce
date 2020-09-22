import React from "react";
import {useForm} from "../Hooks/useForm";
import "./style/login.scss";

const Register = () => {
  const [ values, handleChange ] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  return (
      <div className="login-form">
        <div className="header">
          <h2>register</h2>
        </div>
        <div className="form">
          <p>Please fill the information below</p>
          <div className="inputs">
            <input
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                placeholder="First name"
            />
            <input
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                placeholder="Last name"
            />
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
            />
          </div>
          <button className="form-btn">Create my account</button>
        </div>
      </div>
  );
};

export default Register;