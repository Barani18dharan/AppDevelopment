import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Assets/CSS/Login.css'
import { EntryService } from '../Services/EntryService';
import store from '../Redux/Store';

const Signup = () => {

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  
  const handlechange = (e) => {

    setUser({...user, [e.target.name] : e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await EntryService.createNewUser(user);

    if(response.token !== null) {
      
      localStorage.setItem("Token", response.token )
      localStorage.setItem("email", user.email )
      store.dispatch({
        type :  "login",
        payload : user
      })
      navigate("/
      
      
      
      
      
      
      
      
      main")
    }
  }
    return (
      <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
          onChange={handlechange}
          name="firstname"
          type="text"
          className="form-control"
          placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
          onChange={handlechange} 
          name="lastname"
          type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
          onChange={handlechange}
          name="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
          onChange={handlechange}
          name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/">sign in?</Link>
        </p>
      </form>
      </div>
      </div>
      </div>
    )
}

export default Signup;
