import React from "react";
import BannerBackground from "../Assets/banner.png";
import BannerImage from "../Assets/new1.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container"name="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           Taking Employees Attendance is easier now
          </h1>
          <p className="primary-text">
          SNAP<span style={{color:" #21E1E1"}}>IN</span> you can check in and check out also know salary information and request (leave,day off,bonus)
          </p>
          <button className="secondary-button ">
            Start Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
