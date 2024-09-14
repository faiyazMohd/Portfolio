import React from "react";
import ProjectItem from "./ProjectItem";
import youtubeCloneImg from "../asssets/projectImages/youtube-2.png";
import endurefitImg from "../asssets/projectImages/endurefit-1.png";
import craveyumImg from "../asssets/projectImages/craveyum.png";

const Projects = () => {
  const projectsArray = [
    {
      projectImage: youtubeCloneImg,
      projectName: "Youtube Doppelganger",
      projectDesc:
        "'YouTube Doppelganger', built with React, Redux Toolkit, and Tailwind Css, is an exact replica of YouTube's web platform, created to showcase my front-end web development skills  and powered by the YouTube Data API.",
      projectLiveLink: "https://youtube-doppelgangerr.netlify.app/",
      projectGithublink:
        "https://github.com/faiyazMohd/NamasteReact/tree/main/youtube-clone",
    },
    {
      projectImage: endurefitImg,
      projectName: "EndureFit :An Ultimate Fitness App",
      projectDesc:
        "Created a fullstack web application using the MERN stack. Implemented comprehensive user authentication, including login, signup, and password recovery, Google Sign-In .Developed three modules—'Exercises,' 'Diets,' and 'Forum'.",
      projectLiveLink: "https://endurefit.netlify.app/",
      projectGithublink: "https://github.com/faiyazMohd/EndureFitClient",
    },
    {
      projectImage: craveyumImg,
      projectName: "CraveYum : An Food Delivering App",
      projectDesc:
        "Built a React-based food delivery app with Redux Toolkit and Parcel. Integrated live restaurant data from Swiggy's API, styled using vanilla CSS for efficiency. Ensured reliability through extensive Jest and React Testing Library testing.",
      projectLiveLink: "https://craveyum.netlify.app/",
      projectGithublink:
        "https://github.com/faiyazMohd/NamasteReact/tree/main/CraveYum",
    },
  ];
  return (
    <div className="projectSection"  id="projects">
      <div className="sectionTitle">&lt;Projects/&gt;</div>
      <div className="projectsContainer">
        {projectsArray.map((project,index)=>{
        return <ProjectItem key={index+project.projectName} projectDetails={project} />
        }
        )}
      </div>
    </div>
  );
};

export default Projects;
