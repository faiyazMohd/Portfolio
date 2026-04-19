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
                GBIM Technologies Pvt Ltd.
              </a>
            </div>
          </h3>
          <div className="role-title">Frontend Developer</div>
          <div className="date-range">Mar 2025 – Present</div>
        </div>

        <ul className="experience-details">
          <li>
            Contributed to the development of{" "}
            <span className="linkContainer">
              <a
                className="linkToExternalWebsite"
                target="_blank"
                href="https://keydemand.in/"
              >
                DMCockpit
              </a>
            </span>
            , a scalable and data-driven digital marketing platform featuring
            tools like Website Rank Checker, Website Audit, Analytics &
            Reporting, Performance Marketing, Social Media Scheduling &
            Insights, and Competitor Analysis.
          </li>
          <li>
            Developed a complex interactive dashboard using Next.js and
            React.js, enabling real-time data visualization and delivering a
            smooth, intuitive user experience.
          </li>
          <li>
            Optimized the application architecture to support future feature
            expansions, enhancing maintainability and reducing development time
            for new features.
          </li>
        </ul>
      </div>
      {/* Experience Card 2 */}

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
          <div className="date-range">Dec 2023 – Jan 2025</div>
        </div>

        <ul className="experience-details">
          <li>
            Managed the development of{" "}
            <span className="linkContainer">
              <a
                className="linkToExternalWebsite"
                target="_blank"
                href="https://keydemand.in/"
              >
                Keydemand
              </a>
            </span>
            , a scalable and complex real estate website with a sophisticated
            admin panel built using React.js, ensuring timely delivery and
            alignment with client expectations.
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
