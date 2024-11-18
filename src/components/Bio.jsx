import { BIO } from "../Data"; // Assuming 'BIO' is an array of bio strings
import { motion } from "framer-motion";
const Bio = () => {
  return (
    <section className="py-10 pt-20 -z-40  " id="bio">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-center"
        >
          Bio
        </motion.h2>
        <div className="flex flex-col  gap-4 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
          {BIO.map((bio, index) => (
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              key={index}
              className={`p-4 rounded-md shadow-md  -z-50 ${bio.style}`}
            >
              {bio.paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
