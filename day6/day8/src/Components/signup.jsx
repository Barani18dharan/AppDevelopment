import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/CSS/Login.css'

const Signup = () => {
    return (
      <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
          name="firstname"
          type="text"
          className="form-control"
          placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
          name="lastname"
          type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
          name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <Link to="/login/main">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">sign in?</Link>
        </p>
      </form>
      </div>
      </div>
      </div>
    )
}

export default Signup;
