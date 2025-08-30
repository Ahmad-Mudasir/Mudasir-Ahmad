// /* eslint-disable react/prop-types */
// import { useState } from "react";

// // eslint-disable-next-line react/prop-types
// const ExperienceItem = ({ title, company, timePeriod, description, img }) => {
//   const [showMore, setShowMore] = useState(false);

//   return (
//     <div className="p-4 border-b-2 border-gray-200">
//       <h3 className="text-xl font-semibold text-[#ec6e59]">{title}</h3>
//       <p className="text-sm">
//         {company} - {timePeriod}
//       </p>
//       <p className="text-lg">{description.substring(0, 100) + "..."}</p>

//       <div className="text-center mt-6">
//         <button
//           className="text-blue-500 hover:underline"
//           onClick={() => setShowMore((prev) => !prev)}
//         >
//           {showMore ? "Show Less" : "See More"}
//         </button>
//       </div>
//       {showMore && (
//         <div className="fixed sm:inset-0 inset-6  flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg  mx-auto">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//               Additional Details
//             </h3>
//             <p className="text-gray-700 text-sm">{description}</p>
//             {img && (
//               <img
//                 src={img}
//                 alt={`${company} logo`}
//                 className="mt-4 w-80 rounded-md h-24 object-cover"
//               />
//             )}
//             <button
//               className="mt-4 text-blue-500 hover:underline"
//               onClick={() => setShowMore(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExperienceItem;
