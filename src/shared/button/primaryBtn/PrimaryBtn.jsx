import React from "react";
import "./index.css";
import { FiArrowRight } from "react-icons/fi"; // Import the icon
const PrimaryBtn = () => {
  return (
    <div className="button-container">
      <button className="animated-button text-bold ">
        Get Started
        <span className="icon">
          <FiArrowRight />
        </span>
      </button>
    </div>
  );
};

export default PrimaryBtn;
