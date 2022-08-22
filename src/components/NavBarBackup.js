import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';

export const Navbar = ({name}) => {

  const linkedInURL = 'https://www.linkedin.com/in/david-murillo-15a62a217/'
  const githubURL = 'https://github.com/davidfmurillob'
  const curriculumURL = 'https://drive.google.com/file/d/10hrUhyy8bpAVzWCNAnQyPMwMYLzGqtn6/view?usp=sharing'


  return (
    <>
    <nav className="flex flex-col sm:flex-row pl-5 gap-2 justify-around py-6 flex-wrap">
          <div>
            <a href="/" className="text-2xl text-yellow-500 pt-2">{name}</a>
          </div>
          <ul className="flex flex-col sm:flex-row gap-4 items-baseline ">
            <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
              <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>About me</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
              <Link to="skills" spy={true} smooth={true} offset={10} duration={500}>Skills</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
              <Link to="projects" spy={true} smooth={true} offset={-10} duration={600}>Projects</Link>
            </li>
            <li className="hover:underline hover:underline-offset-8 decoration-yellow-500 sm:pl-4 hover:cursor-pointer">
            <Link to="contact" spy={true} smooth={true} offset={10} duration={700}>Contact me</Link>
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
        </nav>
        <div className='hidden lg:flex fixed flex-col flex-end top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded pl-4'>
                    <a onClick={() => window.open(linkedInURL, '_blank')} className='flex justify-between items-center w-full text-gray-300' href="/">
                        Linkedin <FaLinkedin  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a3a3a] rounded pl-4'>
                    <a onClick={() => window.open(githubURL, '_blank')} className='flex justify-between items-center w-full text-gray-300' href="/">
                        Github <FaGithub  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2A9D8F] rounded pl-4'>
                    <a className='flex justify-between items-center w-full text-mygray-500' href="mailto:davidfmurillob@gmail.com">
                        Email <HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[190px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-yellow-400 rounded pl-4'>
                    <a onClick={() => window.open(curriculumURL, '_blank')} className='flex justify-between items-center w-full text-mygray-500' href="/">
                        Curriculum <BsFillPersonLinesFill  size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </>
  )
}
///////////////////////////////////////////////////////////////////////////