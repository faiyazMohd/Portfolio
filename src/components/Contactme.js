import React from "react";
import contactIcon from "../asssets/png/phone.png";
import emailIcon from "../asssets/png/email.png";
import linkedinIcon from "../asssets/png/linkedin.png";
import githubIcon from "../asssets/png/github.png";
import locationIcon from "../asssets/png/location.png";
const Contactme = () => {
  return (
    <div className="contactmeSection" id="contact">
      <div className="sectionTitle">&lt;Contact me/&gt;</div>
      <div className="contactmeContainer">
        <div className="contactNumberContainer">
          <div className="contactIcon">
            <img src={contactIcon} alt="" />
          </div>
          <div className="contactNumber">+91 7977017820</div>
        </div>
        <div className="contactEmailContainer">
          <a
            className="contactIcon"
            href="mailto:aiyaz.b.mohd@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={emailIcon} alt="" />
          </a>
          <a
            className="contactEmail"
            href="mailto:aiyaz.b.mohd@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            faiyaz.b.mohd@gmail.com
          </a>
        </div>
        <div className="contactLinkedinContainer">
          <a
            className="contactIcon"
            href="https://www.linkedin.com/in/faiyazmohamed/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="" />
          </a>
          <a
            className="contactLinkedin"
            href="https://www.linkedin.com/in/faiyazmohamed/"
            target="_blank"
            rel="noreferrer"
          >
            faiyazmohamed
          </a>
        </div>
        <div className="contactGithubContainer">
          <a
            className="contactIcon"
            href="https://github.com/faiyazMohd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="" />
          </a>
          <a
            className="contactGithub"
            href="https://github.com/faiyazMohd"
            target="_blank"
            rel="noreferrer"
          >
            faiyazMohd
          </a>
        </div>
        <div className="locationContainer">
          <div className="contactIcon">
            <img src={locationIcon} alt="" />
          </div>
          <div className="location">Navi Mumbai,India</div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
