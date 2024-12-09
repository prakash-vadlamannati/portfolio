// ProgressBar.js
import React from "react";
import "./progress.css";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="label">{label}</div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
