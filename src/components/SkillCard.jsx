import React from "react";

export const SkillCard = ({ image,name }) => {
  return (
    <div  data-aos="zoom-in" className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded pt-2 ">
      <img className="w-20 mx-auto" src={image} alt="JavaScript icon" />
        <p className="my-4 text-slate-300">{name}</p>
    </div>
  );
};
