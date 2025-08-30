import { BIO } from "../Data"; // Assuming 'BIO' is an array of bio strings
import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MAX_CHARS = 380;

const Bio = () => {
  const [expanded, setExpanded] = useState(Array(BIO.length).fill(false));

  const toggleExpand = (idx) => {
    setExpanded((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <section className="py-10 pt-20 -z-40" id="bio">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-3 text-center bg-gradient-to-r from-[#0ef] via-white to-[#0ef] bg-clip-text text-transparent"
        >
          Bio
        </motion.h2>
        <div className="mx-auto mb-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#0ef]/40 to-transparent" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl"
        >
          {BIO.map((bio, index) => {
            const text = bio.paragraph || "";
            const isLong = text.length > MAX_CHARS;
            const showAll = expanded[index];
            const visibleText =
              isLong && !showAll ? text.slice(0, MAX_CHARS) + "..." : text;

            return (
              <motion.div
                key={index}
                variants={item}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-[0_0_20px_#00eeff22]"
              >
                <p
                  className={`text-[15px] sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-gray-200 text-justify first-letter:text-[#0ef] first-letter:font-semibold first-letter:text-3xl sm:first-letter:text-4xl first-letter:mr-2 first-letter:float-left ${bio.style}`}
                >
                  {visibleText}
                </p>

                {isLong && (
                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-[#0ef] text-sm sm:text-base hover:underline focus:outline-none focus:ring-2 focus:ring-[#0ef]/40 rounded"
                    >
                      {showAll ? "Show less" : "Read more"}
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;
