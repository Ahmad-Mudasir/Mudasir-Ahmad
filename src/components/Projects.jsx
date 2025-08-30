import { motion } from "framer-motion";
import { PROJECTS } from "../Data";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="pt-20 -z-40 relative overflow-hidden" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6 text-center text-white text-3xl sm:text-4xl font-extrabold"
      >
        Projects
      </motion.h2>

      {/* Accent line under title */}
      <div className="mx-auto my-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#0ef]/40 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4"
      >
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={card}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl border border-white/10 bg-transparent p-3 shadow-md shadow-green-500/20 transition-colors duration-300 hover:border-white/30 h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt={project.name}
                  src={project.image}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-56"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="mt-4 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold text-[#ec6e59]">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 flex-1">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo of ${project.name}`}
                    className="inline-flex items-center rounded-md bg-[#ec6e59] px-3 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-yellow-500 focus:outline-none focus:ring-2 focus:ring-[#ec6e59]/40"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code of ${project.name} on GitHub`}
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-yellow-500 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <AiFillGithub className="h-5 w-5" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
