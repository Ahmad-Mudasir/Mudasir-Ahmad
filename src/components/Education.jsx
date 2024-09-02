
import { educationData } from "../Data";

function Education() {
  return (
    <section id="education" className="shadow-md text-white py-20 px-4 -z-50">
      <div className="max-w-7xl mx-auto p-4 shadow-md shadow-gray-400">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Education
        </h2>
        <div className="grid pt-10 grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div key={edu.id} className=" rounded-lg p-2  shadow-md shadow-sky-700 overflow-hidden duration-500 hover:scale-105">
               
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
        </div>
      </div>
    </section>
  );
}

export default Education;
