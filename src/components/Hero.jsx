import React from "react";
import {Link} from 'react-scroll';
import {FaArrowDown} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=" text-white flex flex-col justify-center items-center h-[90vh] p-2sm:px-14 md:px-16 lg:px-32 xl:px-44">
      <h2 className="text-2xl sm:text-3xl text-yellow-500 pt-2 text-center">
        Hi, <span className="text-slate-300">mi name is</span>
      </h2>
      <h1 className="text-3xl sm:text-6xl text-yellow-500 uppercase text-center">
        David Murillo
      </h1>

      <h3 className="text-xl sm:text-2xl text-center">
        I'm a <span className="text-yellow-500">front-end</span> software
        developer!
      </h3>
      <br></br>
      <p className="text-center">
        I'm a person which is always learning new things about technologies and the software development world.  
      </p>
      <Link
        className="animate-bounce h-12 px-8 mt-12 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:cursor-pointer hover:bg-yellow-500 hover:text-mygray-600"
        to="projects" spy={true} smooth={true} offset={-10} duration={600}
      >
        My projects
      </Link>
      <Link to="projects" spy={true} smooth={true} offset={-10} duration={600}>
      <FaArrowDown size={20} className="mt-8 animate-bounce transition-colors duration-150 hover:cursor-pointer text-amber-400 h-8"/>
      </Link>
    </div>
  );
};

export default Hero;
