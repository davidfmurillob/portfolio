import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function NavLinks({ closeByLink }) {
  const curriculumURL =
    "https://drive.google.com/file/d/1RNohQr_v2rBcWV3l3KQBcy_REPgA2qHy/view?usp=sharing";

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className="flex flex-col sm:flex-row gap-4 items-baseline">
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          onClick={closeByLink}
        >
          About me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer"
      >
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          onClick={closeByLink}
        >
          Skills
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-10}
          duration={600}
          onClick={closeByLink}
        >
          Projects
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer"
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={10}
          duration={700}
          onClick={closeByLink}
        >
          Contact me
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        className="hover:cursor-pointer"
      >
        <a
          className=" animate-bounce mt-4 sm:mt-0 h-10 px-5 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
          href={curriculumURL}
          onClick={closeByLink}
        >
          Curriculum
        </a>
      </motion.li>
    </ul>
  );
}

export default NavLinks;
