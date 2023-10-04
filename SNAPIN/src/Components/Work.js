import React from "react";
import timer from "../Assets/timer.png";
import effort from "../Assets/joint-effort.png";
import easy from "../Assets/easy-installation.png";

const Work = () => {
  const workInfoData = [
    {
      image: timer,
      title: "fast",
      text: "just by one click you sign in& out , requesting ( day off,leave) ",
    },
    {
      image: effort,
      title: "collaboration",
      text: "efficient communication between employee and manager ",
    },
    {
      image: easy,
      title: "Easy to use",
      text: "Designed for simplicity, our user-friendly app ensures that even non-tech-savvy users find it easy to navigate and utilize.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
       
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        "Our mobile application simplifies the process by allowing employees to mark their attendance, send leave requests, and receive salary deduction 
        information with just a few taps, fostering efficiency and convenience."
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
