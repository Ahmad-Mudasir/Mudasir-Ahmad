import { motion } from "framer-motion";
import { PROJECTS } from "../Data";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <section className="pt-20 -z-40" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-20 mt-12">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex flex-col-reverse gap-20 sm:flex-row sm:items-center sm:justify-between"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 flex flex-col gap-2"
            >
              <h1 className="text-xl font-bold text-[#ec6e59]">
                {project.name}
              </h1>
              <p className="sm:text-justify font-light leading-loose text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex gap-5 mt-7">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-[#ec6e59] text-white px-4 py-2 rounded-md text-sm duration-500 shadow-md hover:shadow-yellow-500"
                >
                  Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-4 py-2 border border-black rounded-md text-sm text-black bg-white shadow-md duration-500 hover:shadow-yellow-500"
                >
                  <AiFillGithub className="w-6 h-6" /> Code
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 mb-8 sm:mb-0"
            >
              <img
                alt={project.name}
                src={project.image}
                className="rounded-md w-full shadow-lg shadow-green-500  lg:w-[80%]"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
