import React from "react";

const Experience = () => {
  return (
    <div className="experienceSection" id="experience">
      <div className="sectionTitle">&lt;Experience/&gt;</div>
      {/* Experience Card 1 */}
      <div className="experience-card ">
        <div>
          <h3 className="experience-header ">
            <div className="linkContainer">
              <a
                className="linkToExternalWebsite"
                target="_blank"
                href="https://www.boppotechnologies.com/"
              >
                Boppo Technologies
              </a>
            </div>
          </h3>
          <div className="role-title">Software Developer</div>
          <div className="date-range">Dec 2023 – Present</div>
        </div>

        <ul className="experience-details">
          <li>
            Managed the development of {" "} 
            <span className="linkContainer">
              <a
                className="linkToExternalWebsite"
                target="_blank"
                href="https://keydemand.in/"
              >
                Keydemand
              </a>
            </span>
            , a scalable and complex real estate website with a
            sophisticated admin panel built using React.js, ensuring timely
            delivery and alignment with client expectations.
          </li>
          <li>
            Collaborated with cross-functional teams to solve technical
            challenges, focusing on optimizing scalability and improving the
            user experience.
          </li>
          <li>
            Developed a Next.js website, providing a smooth and responsive
            interface tailored for real estate clients.
          </li>
          <li>
            Built a React Native mobile app for both Android and iOS, ensuring
            consistent performance and scalability across platforms.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
