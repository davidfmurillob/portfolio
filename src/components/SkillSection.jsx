import React from "react";
import { SkillCard } from "../components/SkillCard";

import skills_img from "../assets/ilustrations/undraw_code_thinking_re_gka2.svg";
import css_icon from "../assets/css-3-svgrepo-com.svg";
import html_icon from "../assets/html-5-logo.svg";
import js_icon from "../assets/js-logo.svg";
import react_icon1 from "../assets/react.png";
import tailwind_icon from "../assets/tailwindcss-icon.svg";
import bootstrap_icon from "../assets/bootstrap-5.png";

const SkillSection = () => {
  return (
    <>
      <section
        id="skills"
        className="container mx-auto mt-10 pt-10 sm:px-6 md:px-12 lg:px-24 xl:px-32 h-full"
      >
        <h3 className="text-3xl text-yellow-500 sm:text-center pl-6 pb-2">
          My
        </h3>
        <h2 className="text-5xl sm:text-center mb-6 text-slate-300 pl-6">
          Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-2 h-full gap-4">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 text-center py-8">
            <SkillCard image={html_icon} name="HTML" />
            <SkillCard image={css_icon} name="CSS" />
            <SkillCard image={js_icon} name="Javascript" />
            <SkillCard image={react_icon1} name="React" />
            <SkillCard image={tailwind_icon} name="Tailwind" />
            <SkillCard image={bootstrap_icon} name="Bootstrap" />
          </div>

          <div className="max-w-full h-auto p-2 flex items-center justify-center">
            <img
              src={skills_img}
              alt="pic"
              className=" rounded max-w-full h-auto "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSection;
