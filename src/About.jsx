import React from "react";
import { UndrawWorkingLate } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawWorkingLate />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">About Me</h1>
          <h4>
            Im Jenny!
            Im am 24 years old and live in Stockholm.
             
            </h4>
        </div>
      </div>
    </div>
  );
};

export default About;









