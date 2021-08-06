import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "./data/info";

function ProjectList(props) {
  const { personalProjects } = projects;
  return (
    <div>
      <h1>Here comes the projects</h1>
      <ul>
        {personalProjects.map((project) => (
          <ProjectItem {...project} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
