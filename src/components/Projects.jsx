import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => (
  <div className="border-b border-neutral-900 pb-4">
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl"
    >
      Projects
    </motion.h1>
    <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className=" w-full lg:w-1/4"
          >
            <img
              src={project.image}
              width="150"
              height="150"
              alt="Project Title"
              className="mb-6 rounded-2xl"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <div className="flex items-center mb-2 gap-4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <button className="bg-green-300 rounded px-2 mt-[-5px]" >
                <a
                  className="font-poppins font-bold text-neutral-950"
                  href={project.link}
                  target="_blank"
                >
                  Watch!
                </a>
              </button>
            </div>
            <p className="mb-4 text-neutral-400 ">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <spna
                key={index}
                className="mr-5 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-300"
              >
                {tech}
              </spna>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
