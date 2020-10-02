import React, {useState} from "react";
import "./style/login.scss";
import {Link} from "react-router-dom";
import firebase from "firebase";

//login
export const Login = (p) => {
  const [values, setForm] = useState({});
  const [error, setError] = useState("")
  const auth = firebase.auth();
  const errs = {
    "The email address is badly formatted.": "Please enter valid email.",
    "The password is invalid or the user does not have a password.": " Invalid Password.",
    "Too many unsuccessful login attempts. Please try again later.": "Please try again.",
    "There is no user record corresponding to this identifier. The user may have been deleted.": "You don't have an account",
    "signInWithEmailAndPassword failed: First argument \"email\" must be a valid string.": "Please enter valid email."
  }

  //handling user login
  const HandleUserLogin = () => {
    auth.signInWithEmailAndPassword(values.email, values.password).then(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user);
          p.history.push("/")
        } else {
          setError("An error occurred")
        }
      })
    }).catch(error => {
      setError(errs[error.message]);
      console.log(error.message);
    });
  }

  return (
      <div className="login">
        <div className="login-form">
          <div className="logo">
            <Link to="/"><img src="./img/icon/logo.png" alt=""/></Link>
          </div>
          <div className="header">
            <h2>log in</h2>
          </div>
          <div className="form">
            {error ? <span className="hint">{error}</span> :
                <p className="hint">Please enter your e-mail and password</p>}
            <div className="inputs">
              <input
                  type="email"
                  name="email"
                  value={values.email || ''}
                  onChange={(e) => setForm({...values, email: e.target.value})}
                  placeholder="Email"
              />
              <div className="forgot-pass">
                <input
                    type="password"
                    name="password"
                    value={values.password || ''}
                    onChange={(e) => setForm({...values, password: e.target.value})}
                    placeholder="Password"
                />
                <Link className="forgot-password-btn" to="/reset-password">forgot password?</Link>
              </div>
            </div>
            <button onClick={(e) => {
              e.preventDefault();
              if (values.email) {
                HandleUserLogin();
              } else {
                setError("Please enter valid email.")
              }
            }} className="form-btn">log in
            </button>
          </div>
          <div className="create-account">
            <p>
              You don't have an account? <Link className="create-acc-btn" to="/register">Create one</Link>
            </p>
          </div>
        </div>
      </div>
  );
};

//the registration
export const Register = (p) => {
  const [values, setForm] = useState({});
  const [error, setError] = useState("")
  const auth = firebase.auth();
  const errs = {
    "Password should be at least 6 characters": "Password should be at least 6 characters.",
    "The email address is already in use by another account.": "The email address is already in use",
    "The email address is badly formatted.": "Please enter a valid email",
    "Please fill your information": "Please fill your information.",
    'createUserWithEmailAndPassword failed: First argument "email" must be a valid string.': "Please enter a valid email"
  }

  const canContinue = values.fullName;

  //handle registration
  const handleUserRegistration = () => {
    auth.createUserWithEmailAndPassword(values.email, values.password).then(user => {
      // Update profile
      updateProfile(values.fullName);
      // Send verification email onSuccess
      verificationEmail()
      console.log(user);
    }).catch(error => setError(errs[error.message]));
  };

  //update profile
  const updateProfile = (name) => {
    let user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(r => {
          console.log("err from update profile >>", r)
        }
    ).catch(error => console.log("err from update profile >>", error))
  }

  //we need to send a verification here
  const verificationEmail = () => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => {
      setError("Success! Check your inbox to verify your account.");
      setTimeout(() => {
        p.history.push('/');
      }, 1500)
    }).catch((error) => console.log(error));
  };

  return (
      <div className="login">
        <div className="login-form">
          <div className="logo">
            <Link to="/"><img src="./img/icon/logo.png" alt=""/></Link>
          </div>
          <div className="header">
            <h2>register</h2>
          </div>
          <div className="form">
            {error ? <span
                    className={error === "Success! Check your inbox to verify your account." ? "alert-success" : "hint"}>{error}</span> :
                <p className="hint" style={{color: "black"}}>Please fill the information below</p>}
            <div className="inputs">
              <input
                  type="text"
                  name="fullName"
                  value={values.fullName || ''}
                  onChange={(e) => setForm({...values, fullName: e.target.value})}
                  placeholder="Full Name"
              />
              <input
                  type="email"
                  name="email"
                  value={values.email || ''}
                  onChange={(e) => setForm({...values, email: e.target.value})}
                  placeholder="Email"
              />
              <input
                  type="password"
                  name="password"
                  value={values.password || ''}
                  onChange={(e) => setForm({...values, password: e.target.value})}
                  placeholder="Password"
              />
            </div>
            <button
                disabled={!canContinue}
                onClick={(e) => {
                  e.preventDefault();
                  if (!values.email) {
                    setError(errs["The email address is badly formatted."])
                  } else if (!values.password) {
                    setError(errs["Password should be at least 6 characters"])
                  } else {
                    handleUserRegistration();
                  }
                }} className="form-btn">Create my account
            </button>
          </div>
        </div>
      </div>
  );
};

export const ForgetPassword = p => {
  const [values, setForm] = useState({});
  const [error, setError] = useState("")
  const auth = firebase.auth();
  const canSend = values.email;
  const errs = {
    "Thr email address is badly formatted.": "Please enter valid email",
    "there is no user record corresponding to this identifier. the user may have been deleted.": "There is no user with email"
  }

  const handleReset = () => {
    auth.sendPasswordResetEmail(values.email).then(() => {
      setError("Check your inbox.");
      setTimeout(() => {
        p.history.push("/");
      }, 1500)
    }).catch(error =>
        setError(errs[error.message])
    )
  }
  return (
      <div className="login">
        <div className="login-form">
          <div className="logo">
            <Link to="/"><img src="./img/icon/logo.png" alt=""/></Link>
          </div>
          <div className="header">
            <h2>Reset Password</h2>
          </div>
          <div className="form">
            {error ? <span
                    className={error === "Success! Check your inbox to verify your account." ? "alert-success" : "hint"}>{error}</span> :
                <p className="hint" style={{color: "black"}}>Please fill the information below</p>}
            <div className="inputs">
              <input
                  type="email"
                  name="email"
                  value={values.email || ''}
                  onChange={(e) => setForm({...values, email: e.target.value})}
                  placeholder="Email"
              />
            </div>
            <button disabled={!canSend} onClick={e => {
              e.preventDefault();
              handleReset();
            }} className="form-btn">reset
            </button>
            <span className="remember">
              Remember your password ?
              <Link to="/login" className="log-back"> Back to login</Link>
            </span>
          </div>
        </div>
      </div>
  );
}