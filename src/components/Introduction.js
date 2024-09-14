import React from "react";
import developerPng from "../asssets/png/developerPng.png";
const Introduction = () => {
  return (
    <div className="introductionSection">
      <div className="leftSide">
        <div className="">Hello👋,</div>
        <div className="">I'm Faiyaz Mohamed,</div>
        {/* <div className="">Frontend Developer</div> */}
        {/* <div className="">turning ideas into delightful websites as a front-end enthusiast.</div> */}
        <div className="">
          a <span className="textShadowBlue">frontend developer</span> on a mission to blend creativity and
        </div>
        <div className="">code to craft captivating web experiences</div>
        <div className="">
          <a
            href="https://flowcv.com/resume/s2r4f2fkkt"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
        </div>
      </div>
      <div className="rightSide">
        <img src={developerPng} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
