import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import contact_img from "../assets/ilustrations/undraw_developer_activity.svg";

const Contact = () => {
  const linkedInURL = "https://www.linkedin.com/in/david-murillo-15a62a217/";
  const githubURL = "https://github.com/davidfmurillob";

  return (
    <>
      <div
        data-aos="fade-right"
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 p-5 gap-8 my-16 mx-4 sm:px-14 md:px-16 lg:px-32 xl:px-44"
      >
        <div className="flex flex-col">
          <p className="inline border-b-4 border-yellow-400 text-2xl text-slate-200 w-full ">
            Contact me!
          </p>
          <form
            method="POST"
            action="https://getform.io/f/7eb34c23-3671-4a6e-b72d-ba6f45f5c188"
            className="flex flex-col"
          >
            <label className="w-4/5 text-slate-200 mt-2">
              Enter your email:{" "}
            </label>
            <input
              type="email"
              className="w-full  mt-2 rounded"
              name="email"
            ></input>
            <label className="text-slate-200 mt-2">Type your message: </label>
            <textarea
              name="message"
              className="w-full  p-2 mt-2 rounded"
              rows="8"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 px-5 mt-8 inline-flex items-center justify-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600 cursor-pointer"
            >
              Send message!
            </button>
          </form>
        </div>
        <div className="hidden md:flex max-w-full h-auto">
          <img src={contact_img} alt="pic" />
        </div>
      </div>
      <ul  data-aos="fade-right" className="flex justify-center gap-6 pb-6 text-slate-400">
        <li className="cursor-pointer hover:text-yellow-400 hover:scale-105 duration-300">
          <a
            onClick={() => {
              window.open(githubURL, "_blank");
            }}
            href="/"
          >
            <FaGithub size={40} />
          </a>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 hover:scale-105 duration-300">
          <a
            onClick={() => {
              window.open(linkedInURL, "_blank");
            }}
            href="/"
          >
            <FaLinkedin size={40} />
          </a>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 hover:scale-105 duration-300">
          <a href="mailto:davidfmurillob@gmail.com">
            <HiOutlineMail size={40} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Contact;
