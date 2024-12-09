// SkillBars.js
import React from "react";
import ProgressBar from "./progress"; // Import the reusable ProgressBar component
import "./SkillBars.css"; // Optional: Add styles specific to SkillBars
import htc from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import sql from './sql.png'

import './portfolio.css'

const SkillBars = () => {
  return (
    <div className="skill-box">
       <img src={htc} className="skimg"/>
      <ProgressBar label="HTML 85%" percentage={85} />
      <img src={css} className="skimg"/>
      
      
      <ProgressBar label="CSS 85%" percentage={85} />
      <img src={js} className="js"/>
      <ProgressBar label="JavaScript 80%" percentage={80} />
      <img src={react} className="js"/>
      
      <ProgressBar label="React 80%" percentage={80} />
      <img src={sql} className="js"/>
      
      <ProgressBar label="SQL 85%" percentage={85} />
    
    
    
    
    </div>
  );
};

export default SkillBars;
