import { HERO } from "../Data";
import personimg from "../assets/person.jpg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="flex flex-wrap min-h-screen items-center ">
      {/* Left Div */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <motion.h2
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-8 p-2 font-bold lg:text[7rem] md:text-5xl text-4xl"
        >
          {HERO.title1}
          <span className="text-sky-300">{HERO.title2}</span>
        </motion.h2>
        <p className="p-2 text-3xl lg:text-4xl">{HERO.greet}</p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>

      {/* Right Div */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <img
            className="rounded-3xl w-96 shadow-md shadow-red-400"
            src={personimg}
            width={450}
            height={450}
            alt="ahmad"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
