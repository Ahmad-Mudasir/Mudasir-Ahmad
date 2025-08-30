import { HERO } from "../Data";
import personimg from "../assets/person.png";
import { motion } from "framer-motion";
import CVDownload from "./CVDownload";

const Hero = () => {
  return (
    <section className="relative flex items-center max-lg:flex-col overflow-hidden pt-16 md:pt-28 pb-16 md:pb-20 md:min-h-screen">
      {/* Hanging CV download - top center */}
      <div className="absolute left-3/4  md:left-2/3 -translate-x-1/2 top-0 md:top-16 z-20 pointer-events-auto">
        <CVDownload />
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 px-4"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-4 mb-4 font-extrabold text-3xl md:text-5xl lg:text-6xl leading-tight"
        >
          <span className="block text-white/90">{HERO.title1}</span>
          <span className="bg-gradient-to-r from-[#0ef] via-white to-[#0ef] bg-clip-text text-transparent">
            {HERO.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="px-1 text-xl md:text-2xl text-white/90"
        >
          {HERO.greet}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl px-1 text-sm md:text-lg text-gray-300 leading-relaxed"
        >
          {HERO.description}
        </motion.p>

        {/* Accent underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-6 h-[2px] w-40 origin-left bg-gradient-to-r from-[#0ef] via-white/60 to-transparent"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-[#0ef] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(0,238,255,0.35)] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#0ef]/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#0ef]/60 hover:shadow-[0_0_20px_#00eeff66] focus:outline-none focus:ring-2 focus:ring-[#0ef]/40"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 lg:p-8 mt-10 lg:mt-0 px-4"
      >
        <div className="relative mx-auto flex max-w-md justify-center md:justify-end">
          {/* Glow backdrop */}
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-[#0ef]/20 via-transparent to-[#0ef]/10 blur-2xl" />

          <img
            className="rounded-[2rem] w-64 sm:w-80 md:w-96 shadow-[0_10px_40px_rgba(0,238,255,0.25)] ring-1 ring-white/10"
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
