import React, { Component } from "react";
import {  UndrawBusinesswoman  } from "react-undraw-illustrations";
import CvCard from "./CvCard";
import axios from "axios";

class Cv extends Component {
  state = {
    experiences: [],
  };
  componentDidMount() {
    axios.get("./src/data/cv.json").then((response) => {
      this.setState({
        experiences: response.data,
      });
    });
  }

  render() {
    const experiences = this.state.experiences;
    let experienceList;

    if (experiences.length > 0) {
      experienceList = experiences.map((experience) => {
        return (
          <div id={"cv-" + experience.id} key={experience.id}>
            <CvCard experience={experience} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div class="ui stackable two column grid">
          <div class="column">
            < UndrawBusinesswoman  />
          </div>
          <div className="column">
            <h1 id="cv-header" className="ui header">
              CV
            </h1>
            <h4>Here can you find my previous jobs and education</h4>
          </div>
        </div>
        <div className="ui stackable four column grid">{experienceList}</div>
      </div>
    );
  }
}

export default Cv;
