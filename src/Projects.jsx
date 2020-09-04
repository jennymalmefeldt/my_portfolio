import axios from "axios";
import ProjectCard from "./ProjectCard";
import React, { Component } from "react";
import { UndrawWebDevices } from "react-undraw-illustrations";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./src/data/projects.json").then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div id={"project-" + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawWebDevices />
          </div>
          <div className="column">
            <h1 id="projects-header" className="ui header">
              My Projects
            </h1>
            <p>Here should I write something</p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;



