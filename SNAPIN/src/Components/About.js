import React from "react";
import User from "../Assets/user.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container"name="about">
     
      <div className="about-section-image-container">
        <img src={User} alt="" />
      </div>
      <div className="about-section-text-container">
      
        <h1 className="primary-heading">
        The Best Employees Tracking Application
        </h1>
        <p className="primary-text">
        Streamline your workplace with SNAP<span style={{color:" #21E1E1"}}>IN</span>, enabling effortless attendance tracking and seamless communication. Request leave or holidays 
        via messages, while staying informed about salary deduction details."
        </p>
      
      
      </div>
    </div>
  );
};

export default About;
