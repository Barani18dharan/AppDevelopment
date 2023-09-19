import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };
  return (
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
  );
};

export default Login;
