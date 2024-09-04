import { EXPERIENCES } from "../Data";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section className="p-6 max-w-4xl pt-20 mx-auto -z-40 " id="work">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.id}
            title={experience.title}
            company={experience.company}
            timePeriod={experience.timePeriod}
            description={experience.description}
            img={experience.img}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
