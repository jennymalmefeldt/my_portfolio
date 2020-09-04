import React from "react";
import { UndrawBusinesswoman } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawBusinesswoman />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">About Me</h1>
          <p>
            Hi my names is Jenny
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;









