import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import OSS from "../sections/OSS";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <OSS />
    </main>
  );
}

export default Content;
