import React from "react";
import {useForm} from "../Hooks/useForm";
import "./style/login.scss";
import {Link} from "react-router-dom";

const Signing = () => {
  const [ values, handleChange ] = useForm({
    email: "",
    password: ""
  });
  return (
      <div className="login-form">
        <div className="header">
          <h2>log in</h2>
        </div>
        <div className="form">
          <p>Please enter your e-mail and password</p>
          <div className="inputs">
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <div>
              <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
              />
              <Link className="forgot-password-btn" to="/login">forgot password?</Link>
            </div>
          </div>
          <button className="form-btn">log in</button>
        </div>
      </div>
  );
};

export default Signing;