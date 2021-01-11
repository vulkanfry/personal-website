import React from "react";
import EducationList from "../elements/EducationList";
import Resume from "../../resume.json";

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="title bd-header-titles">
          <h1 className="title">
            Education
        </h1>
        </div>
        <div className="title is-4">
          <EducationList
            skills={Resume.education}
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
