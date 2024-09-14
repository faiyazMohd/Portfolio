import React from "react";

const Aboutme = () => {
  return (
    <div className="aboutSection"  id="about">
      <div className="sectionTitle">&lt;About me/&gt;</div>
      <div class="aboutmeContent">
        <div class="quote">"You see, but you do not observe."</div>
        <div class="aboutmeBrief">
          {/* <p>
            In the world of code, I channel Sherlock Holmes: 'You see, but you
            do not observe.' I'm not content with surface-level understanding;
            my curiosity drives me to dissect the code's anatomy. Like a
            detective solving a case, I dive into the intricacies, making each
            line purposeful and ensuring that every project tells a story of
            elegant design and flawless functionality.
          </p> */}
          {/* <p>
            In the world of code, I channel Sherlock Holmes: 'You see, but you
            do not observe.'My curiosity leads me beyond the surface, driving a
            passion for dissecting and understanding the intricate workings of
            technologies. Constantly intrigued by the hidden complexities behind
            each line of code, I approach my work with a commitment to observe
            and comprehend, ensuring that every project harmonizes visual
            elegance with seamless functionality.
          </p> */}
          <p>
            In the world of technologies, I quote Sherlock Holmes:
            <i>'You see, but you do not observe'</i>. My curiosity leads me
            beyond the surface, driving a passion for dissecting and
            understanding the intricate workings of technologies. Like a
            detective solving a case, I dive into the intricacies, making each
            line purposeful and ensuring that every project tells a story of
            elegant design and flawless functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
