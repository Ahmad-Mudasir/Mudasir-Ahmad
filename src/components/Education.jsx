"use client";

import { educationData } from "../Data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % educationData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationData.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + educationData.length) % educationData.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  return (
    <section
      id="education"
      className="shadow-md text-white py-20 px-4 -z-50 overflow-x-hidden"
    >
      <div className="sm:max-w-7xl w-[85vw] mx-auto p-4 shadow-md shadow-gray-400">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          Education & Certifications
        </motion.h2>

        <div className="relative  pt-10 px-4 sm:px-0">
          {/* Carousel Container */}
          <div className="relative  overflow-x-hidden overflow-y-visible">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {educationData.map((edu, index) => {
                const isActive = index === currentSlide;

                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`
                      flex-shrink-0 w-full flex justify-center mb-1 px-3 sm:px-4
                      ${isActive ? "z-10" : "z-0"}
                    `}
                  >
                    <div className="relative w-[92vw] max-w-sm sm:w-full sm:max-w-md md:max-w-lg">
                      {/* Card with blur and scale effects */}
                      <div
                        className={`
                          rounded-lg p-2 shadow-md shadow-sky-700 h-full flex flex-col mb-0 
                          transition-all duration-500 transform
                          ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-90 opacity-80"
                          }
                        `}
                      >
                        <div className="relative">
                          <img
                            src={edu.certificateImage || "/placeholder.svg"}
                            alt={`${edu.degree} certificate`}
                            className="w-full h-56 sm:h-80 md:h-80 rounded-b-lg rounded-t-sm object-cover"
                          />
                        </div>

                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">
                            {edu.collegeName}
                          </h3>
                          <p className="text-gray-300 mt-1 text-sm sm:text-base">
                            {edu.degree}
                          </p>
                          {edu.cgpa && (
                            <p className="text-gray-300 mt-1 text-sm sm:text-base">
                              {edu.cgpa}
                            </p>
                          )}
                          <p className="text-gray-300 mt-1 text-sm sm:text-base">
                            {edu.timePeriod}
                          </p>

                          {edu.credentialLink && (
                            <div className="mt-4">
                              <a
                                href={edu.credentialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                              >
                                <svg
                                  className="w-4 h-4 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                                View Credential
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="hidden sm:inline-flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:inline-flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200
                  ${
                    index === currentSlide
                      ? "bg-sky-400 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
