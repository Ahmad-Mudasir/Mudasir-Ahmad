import { SKILLS } from "../Data";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section className="container mx-auto -z-50" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 mb-12 text-center text-4xl  font-semibold"
      >
        Skills
      </motion.h2>

      <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
        {SKILLS.map(({ id, icon, name, style }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: -20 * (id + 1) }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + id * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`py-2  rounded-lg shadow-md ${style}`}
          >
            <div className="w-20 flex  justify-center mx-auto">{icon}</div>

            <p className="mt-4">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
