import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SideNav = ({linkedInURL,githubURL,curriculumURL}) => {
  return (
    <div className='hidden lg:flex fixed flex-col flex-end top-[35%] left-0 z-40'>
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
  )
}

export default SideNav