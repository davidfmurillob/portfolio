import React from "react";

import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import SideNav from "./SideNav";

const Navbar = () => {
  const linkedInURL = "https://www.linkedin.com/in/david-murillo-15a62a217/";
  const githubURL = "https://github.com/davidfmurillob";
  const curriculumURL = "https://drive.google.com/file/d/10hrUhyy8bpAVzWCNAnQyPMwMYLzGqtn6/view?usp=sharing";

  return (
    <>
      <Navigation />

      <MobileNavigation />
      <SideNav
        linkedInURL={linkedInURL}
        githubURL={githubURL}
        curriculumURL={curriculumURL}
      />
    </>
  );
};

export default Navbar;
