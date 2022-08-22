import React from 'react'
import about_img from "../assets/ilustrations/undraw_programming_re_kg9v.svg";
import { Link } from "react-scroll";

const About = () => {
  const curriculumURL = 'https://drive.google.com/file/d/10hrUhyy8bpAVzWCNAnQyPMwMYLzGqtn6/view?usp=sharing'

  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 py-2 sm:px-14 md:px-16 lg:px-32 xl:px-44 h-4/5">
          <div className="max-w-md sm:max-w-lg flex items-center">
            {/* aplicarle a la imagen un max width revisar el tutorial */}
            <img
              src={about_img}
              alt="pic"
              className="max-w-full h-auto mb-8 "
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h4 className="text-3xl text-yellow-500">Know</h4>
            <h3 className="text-5xl text-slate-300 mb-6">About me</h3>
            <p className="text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <Link
                className="h-12 px-5 mt-8 mr-3 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
                to="contact" spy={true} smooth={true} offset={10} duration={700}
              >
                Contact me
              </Link>
              <a
                className="h-12 px-5 mt-8 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
                href={curriculumURL}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
  )
}

export default About