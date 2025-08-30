import { SKILLS } from "../Data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section className="container mx-auto -z-50 px-4" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#0ef] via-white to-[#0ef] bg-clip-text text-transparent"
      >
        Skills
      </motion.h2>
      <div className="mx-auto my-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#0ef]/40 to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"
      >
        {SKILLS.map(({ id, icon, name, style }) => (
          <motion.div
            key={id}
            variants={item}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-md ${style}`}
          >
            {/* corner glow */}
            <div className="pointer-events-none absolute -top-10 -left-10 h-28 w-28 rounded-full bg-white/5 blur-2xl" />

            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                {icon}
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-100">{name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
