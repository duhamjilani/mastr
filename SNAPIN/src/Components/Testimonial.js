import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper"name="testimonials">
      <div className="work-section-top">
        
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        "Users are raving about our app's intuitive design and how it has transformed their workplace 
        communication and HR processes, making work life smoother and more efficient."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "Absolutely love the app! It's made managing attendance, communication, 
        leave requests, and salary deductions a breeze. A real game-changer for our team!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
