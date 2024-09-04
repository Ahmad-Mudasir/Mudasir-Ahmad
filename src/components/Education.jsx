import { educationData } from "../Data";
import { motion } from "framer-motion";
function Education() {
  return (
    <section id="education" className="shadow-md text-white py-20 px-4 -z-50">
      <div className="max-w-7xl mx-auto p-4 shadow-md shadow-gray-400">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="grid pt-10 grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className=" rounded-lg p-2  shadow-md shadow-sky-700 overflow-hidden duration-500 hover:scale-105"
            >
              <img
                src={edu.certificateImage}
                alt={`${edu.degree} certificate`}
                className="w-full h-64 rounded-b-lg rounded-t-sm" // Adjust the height if needed
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{edu.collegeName}</h3>
                <p className=" mt-2">{edu.degree}</p>
                <p className=" mt-2"> {edu.cgpa}</p>
                <p className=" mt-2">{edu.timePeriod}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
