import React from "react";
import projects from "./data/projects";

const Projects = () => {
  return (
    <div
      data-aos="fade-right"
      id="projects"
      className="p-4 mt-6 sm:px-14 md:px-16 lg:px-32 xl:px-44"
    >
      <h2 className="text-slate-300 sm:text-center text-4xl font-medium">
        My personal
      </h2>
      <h3 className="text-3xl text-yellow-500 sm:text-center mb-12">
        projects
      </h3>
      <div>
        <div className="flex justify-center items-center text-white">
          <div className="container m-4 ">
            {projects.map(
              ({ id, title, description, technologies, github, demo, img }) => (
                <div
                  className="w-full grid grid-cols-12 mb-5 p-6 lg:space-x-8 hover:scale-105 duration-500 rounded-xl shadow-md shadow-[#040c16]"
                  key={id}
                >
                  <div className="col-span-12 lg:col-span-6">
                    <div
                      className="h-full flex flex-col justify-center"
                      data-aos="fade"
                      data-aos-delay="250"
                      data-aos-once="true"
                    >
                      <h2 className="text-3xl text-yellow-500 mb-4">{title}</h2>
                      <p className="text-lg leading-loose pb-4">
                        {description}
                      </p>
                      <p className="text-lg text-gray-400">
                        Technologies: {technologies}
                      </p>
                      <div className="flex flex-row space-x-4 ">
                        <a
                          className="h-12 px-5 mt-8 mr-3 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
                          href={github}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Code
                        </a>

                        <a
                          className="h-12 px-5 mt-8 mr-3 inline-flex items-center text-slate-200 transition-colors duration-150 border border-yellow-500 rounded-lg focus:shadow-outline hover:bg-yellow-500 hover:text-mygray-600"
                          href={demo}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div
                      className="h-full flex justify-center items-center"
                      data-aos="fade"
                      data-aos-delay="500"
                      data-aos-once="true"
                    >
                      <img alt={title} className="m-8 " src={img} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
