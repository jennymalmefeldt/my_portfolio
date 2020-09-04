import React, { Component } from "react";
import { UndrawAtWork } from "react-undraw-illustrations";
import CvCard from "./CvCard";
import axios from 'axios'

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
        <div>
          <h1 className="ui header"></h1>
          <div class="ui stackable two column grid">
            <div class="column">
              <UndrawAtWork />
            </div>
            <div class="column">
              <h1 id="cv-header" className="ui header">
                CV
              </h1>
              <p>Hi my names is Jenny</p>
            </div>
            <div className="ui stackable four column grid">{experienceList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
