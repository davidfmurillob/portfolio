import React from "react";
import {Link} from 'react-scroll';
import {FaArrowDown} from 'react-icons/fa'
import ReactTyped from "react-typed";
import './hero.css'
import photo from '../../assets/photo.png' 

const Hero = () => {  

  const typedString = 'I\'m a ' 

  return (
    <div  data-aos="zoom-in" className="text-white flex flex-col justify-center items-center h-[100vh] sm:h-[80vh] md:h-[80vh] lg:h-[90vh] p-2 sm:px-14 md:px-16 lg:px-32 xl:px-44 ">
      <div className="mx-4 mt-20 sm:mt-2 w-30 md:w-32 ">
          <img src={photo} alt="me" width="160px" height="21px" className="rounded-full" />
        </div>
      
      
      <h2 className="text-2xl sm:text-2xl  text-yellow-500 pt-2 text-center mb-2">
        Hi! <span className="text-slate-300"><span class="wave">👋</span> Mi name is</span>
      </h2>
      <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-500 uppercase text-center">
        David Murillo
      </h1>

      <p className="text-xl sm:text-2xl text-center text-slate-300 mt-2">{typedString}
      <ReactTyped className="text-yellow-500"
              strings={['Front-end developer', 'Web developer']}
              typeSpeed={80}
              backSpeed={80}
              loop
            />
      </p>
      <p className="text-center text-slate-300 mt-4">
      Someone who is always learning new things about technology and the world of software development.  
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
