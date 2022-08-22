import React from "react";
import { Link } from "react-scroll";

function NavLinks() {

  const curriculumURL = 'https://drive.google.com/file/d/10hrUhyy8bpAVzWCNAnQyPMwMYLzGqtn6/view?usp=sharing'




  return (
    <ul className="flex flex-col sm:flex-row gap-4 items-baseline">
      <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          About me
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
        <Link to="skills" spy={true} smooth={true} offset={10} duration={500}>
          Skills
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-10}
          duration={600}
        >
          Projects
        </Link>
      </li>
      <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
        <Link to="contact" spy={true} smooth={true} offset={10} duration={700}>
          Contact me
        </Link>
      </li>
      <li className="hover:cursor-pointer">
        <a
          className=" animate-bounce mt-4 sm:mt-0 h-10 px-5 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
          href={curriculumURL}
        >
          Curriculum
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
