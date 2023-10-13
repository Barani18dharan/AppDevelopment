import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Assets/CSS/Login.css'
import store from "../Redux/Store";
import { EntryService } from "../Services/EntryService";

const Login = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    switch (name) {
      case "email":
        setUser({ ...user, email: value });
        break;

      case "password":
        setUser({ ...user, password: value });
        break;

      default:
        break;
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await EntryService.validateUser(user);

    if(response.token !== null) {
      console.log(response);
      localStorage.setItem("Token", response.token )
      localStorage.setItem("email", user.email )
      store.dispatch({
        type :  "login",
        payload : user
      })
      navigate("main")
    }
  };
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="mb-3">
              <label>Email address</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
            </div>
            <p className="forgot-password text-right">
              New user <Link to="/sign-up">Signup?</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
