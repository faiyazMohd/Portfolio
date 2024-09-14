import React from "react";

const ProjectItem = ({ projectDetails }) => {
  return (
    <div className="ProjectItem">
      <img src={projectDetails.projectImage} alt="" />
      <div className="projectName">{projectDetails.projectName}</div>
      <div className="projectDesc">{projectDetails.projectDesc}</div>
      <div className="projectLinks">
        <a
          className="externalProjectLink"
          href={projectDetails.projectLiveLink}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
        <a
          className="externalProjectLink"
          href={projectDetails.projectGithublink}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
