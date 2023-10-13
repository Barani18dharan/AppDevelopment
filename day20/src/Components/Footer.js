import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
         <h1 style={{color:"orange"}}>MEETX</h1>
        </div>
        <div className="footer-icons">
          <a href= "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
          <button>

          <BsTwitter />
          </button>
          </ a >
          <a href="https://www.facebook.com/login/">

          <button >

          <FaFacebookF />
          </button>
          </a >
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><Link to="/faq">FAQ's </Link> </span>
        
          <span><Link to="/policy">Privacy Policy</Link> </span>
      
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>244-5333-7784</span>
          
        </div>
        <div className="footer-section-columns">
        </div>
      </div>
    </div>
  );
};

export default Footer;
