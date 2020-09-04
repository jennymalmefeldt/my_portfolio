import React from "react";
import { UndrawAtWork } from "react-undraw-illustrations";

const CV = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawAtWork />
        </div>
        <div class="column">
          <h1 id="cv-header" className="ui header">CV</h1>
          <p>
            Hi my names is Jenny
            </p>
        </div>
      </div>
    </div>
  );
};

export default CV;

