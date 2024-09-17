import React from "react";
import reactLogo from "../asssets/png/react.png";
import jsLogo from "../asssets/png/javascript-2.png";
import htmlLogo from "../asssets/png/html-2.png";
import cssLogo from "../asssets/png/css.png";
import reduxLogo from "../asssets/png/redux.png";
import nodeLogo from "../asssets/png/node-js.png";
import mongoDbLogo from "../asssets/png/mongodb.png";
import tailwindcssLogo from "../asssets/png/tailwindcss.png";
import expressLogo from "../asssets/png/express.png";
import jestLogo from "../asssets/png/jest.png";
import gitLogo from "../asssets/png/git.png";
import muiLogo from "../asssets/png/mui.png";
import reactNativeLogo from "../asssets/png/reactNativeLogo.png";
import nextJsLogo from "../asssets/png/nextJsLogo.png";
import zustandLogo from "../asssets/png/zustandLogo.png";
const Skills = () => {
  return (
    <div className="skillsSection"  id="skills">
      <div className="sectionTitle">&lt;Skills/&gt;</div>
      <div className="skillsContainer">
        <div className="skillContent">
          <div className="logoContainer">
            <img className="logoImg" src={reactLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={reactNativeLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={nextJsLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={reduxLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="ZustandLogoImg"src={zustandLogo} alt="" />
            <span className="zustandLabel">Zustand</span>
          </div>
          
        </div>
        <div className="skillContent">
        <div className="logoContainer">
            <span>Javascript</span>
            <img className="jsLogoImg" src={jsLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={htmlLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="cssLogoImg" src={cssLogo} alt="" />
          </div>
          
          <div className="logoContainer">
            <img className="logoImg" src={tailwindcssLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={muiLogo} alt="" />
          </div>
          
        </div>
        <div className="skillContent">
        <div className="logoContainer">
            <img className="logoImg" src={nodeLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={mongoDbLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={expressLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={jestLogo} alt="" />
          </div>
          <div className="logoContainer">
            <img className="logoImg" src={gitLogo} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
