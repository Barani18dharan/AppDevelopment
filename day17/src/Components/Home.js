import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import cal from "../Assets/cal.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Schedule The Meetings With Us
          </h1>
          <p className="primary-text">
            We help you to schedule the meetings perfectly and help your organisation to save time and became the best
          </p>
          <button onClick={() => navigate('/login')}  className="secondary-button">
            ScheduleMeetings <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <img src={cal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
