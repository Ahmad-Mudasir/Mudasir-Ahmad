import { useEffect, useRef, useState } from "react";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import grayimage from "../assets/black3dpng.png";
import Blueimage from "../assets/blue3d.png";
import { motion, AnimatePresence } from "framer-motion";

const staffAugmentationSteps = [
  {
    number: "01",
    title: "Kalam4Solutions",
    description:
      "Contributed to developing high-performance, responsive frontends using React.js,JavaScript,Material UI, and CSS, significantly enhancing user experience. Collaborated closely with designers and cross-functional teams to deliver pixel-perfect,accessible UI components and streamline state management for improved scalability and maintainability. Built and integrated RESTful APIs using TypeScript, Node.js, and PostgreSQL within a modernmicroservices-based architecture. Conducted and participated in code reviews, ensuring code quality, performance,and adherence to best practices across the engineering team. Played a key role in reducing frontend bugs through careful refactoring, consistent implementation of UI patterns, and adherence to clean coding practices. Tech Stack: JavaScript, TypeScript, HTML, CSS, React.js, Material UI, SCSS, PostgreSQL,Node.js, ExpressJS, Figma",
  },
  {
    number: "02",
    title: "deventia",
    description:
      "Worked remotely as a MERN stack developer, building and maintaining scalable web applications using MongoDB, Express.js, React.js, and Node.js. Developed robust RESTful APIs and dynamic, responsive user interfaces to deliver seamless user experiences. Collaborated with cross-functional teams to design and implement new features, optimize application performance, and ensure code quality through regular code reviews. Integrated third-party services and APIs, and contributed to the adoption of best practices in code structure, testing, and deployment. Tech Stack: MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS, Tailwindcss, Git, Figma.",
  },
  {
    number: "03",
    title: "2ndPlace",
    description:
      "Developed and maintained a web application using React.js, JavaScript, and CSS to create a seamless and efficient user experience. Collaborated with cross-functional teams to implement new features and improve the application's functionality. Conducted and participated in code reviews to ensure code quality, performance, and adherence to best practices. Played a key role in reducing frontend bugs through careful refactoring, consistent implementation of UI patterns, and adherence to clean coding practices. Tech Stack: JavaScript, HTML, CSS, React.js, Material UI, Figma",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  }),
};

const Experience = () => {
  //const [activeProcess, setActiveProcess] = useState("staff");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0); // Added direction tracking for slide animations
  const imageColumnRef = useRef(null);
  const labelRefs = useRef([]);
  const [lineWidths, setLineWidths] = useState([]);

  const goToNextStep = () => {
    setDirection(1); // Set direction for animation
    setActiveIndex((prevIndex) =>
      prevIndex < currentSteps.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToPreviousStep = () => {
    setDirection(-1); // Set direction for animation
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentSteps.length - 1
    );
  };

  const handleRightSectionClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1); // Set direction based on click
    setActiveIndex(index);
  };

  const currentSteps = staffAugmentationSteps;
  const MAX_CHARS_MOBILE = 160;
  const descriptionText = currentSteps[activeIndex].description;
  const isTruncated = descriptionText.length > MAX_CHARS_MOBILE;
  const visibleDescription = isTruncated
    ? descriptionText.slice(0, MAX_CHARS_MOBILE) + "..."
    : descriptionText;

  const recalculateLineWidths = () => {
    const newWidths = currentSteps.map((_, idx) => {
      const labelEl = labelRefs.current[idx];
      const imageEl = imageColumnRef.current;
      if (!labelEl || !imageEl) return 0;
      const labelRect = labelEl.getBoundingClientRect();
      const imageRect = imageEl.getBoundingClientRect();
      // Draw the line all the way to the image edge with a tiny overdraw (responsive)
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      const isMd = window.matchMedia("(min-width: 768px)").matches && !isLg;
      const EDGE_OVERDRAW_PX = isLg ? 8 : isMd ? 8 : 1;
      const delta = imageRect.left - labelRect.right;
      const width = Math.max(0, delta + EDGE_OVERDRAW_PX);
      return width;
    });
    setLineWidths(newWidths);
  };

  useEffect(() => {
    recalculateLineWidths();
    const onResize = () => recalculateLineWidths();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSteps.length]);

  useEffect(() => {
    // remeasure when active item changes or text updates
    const id = requestAnimationFrame(() => recalculateLineWidths());
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, descriptionText]);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        id="work"
        className="min-h-fit  md:min-h-[100%] font-bai    px-4 md:px-12 text-white"
      >
        {/* Main Content */}
        <div className="max-w-[1400px]   mx-auto px-6 pt-32">
          <motion.h1
            variants={itemVariants}
            className="text-4xl xs:text-4xl md:text-4xl text-center lg:text-5xl font-medium mb-4"
          >
            Experience
          </motion.h1>

          {/* Accent line under title */}
          <div className="mx-auto mb-8 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#0ef]/40 to-transparent" />

          <motion.div
            variants={itemVariants}
            className=" border-t border-t-[#404040] flex flex-col lg:flex-row"
          >
            {/* Left Side - Carousel */}
            <div className="relative  w-full  lg:w-[70%] xl:w-[44%]  h-[310px] transition-all duration-700 ease-in-out">
              <div className="relative h-full">
                <motion.div
                  key={activeIndex}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-0 right-0 text-[90px] font-bold text-[#525252] leading-none"
                >
                  {currentSteps[activeIndex].number}.
                </motion.div>
                <div className="pt-28 ">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      <motion.h2
                        className="text-lg md:text-2xl lg:text-xl font-bold mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {currentSteps[activeIndex].title}
                      </motion.h2>
                      <motion.p
                        className="text-[#CCCCCC] text-[12px] md:text-base lg:text-sm max-w-2xl"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        {visibleDescription}
                      </motion.p>
                      {isTruncated && (
                        <motion.button
                          onClick={() => setIsModalOpen(true)}
                          className="mt-3 text-[#1E5CF1] hover:underline text-xs md:text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          See more
                        </motion.button>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* arrow and pagination parrent div */}
              </div>
              <motion.div
                className="absolute bottom-0 flex gap-5 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex gap-2 mt-0">
                  <motion.button
                    onClick={goToPreviousStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TiArrowLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={goToNextStep}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
                    whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TiArrowRight className="w-6 h-6" />
                  </motion.button>
                </div>

                <div className="flex justify-center gap-3">
                  {currentSteps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-[5px] rounded-full transition-all ${
                        activeIndex === index
                          ? "w-[20px] bg-[#1E5CF1]"
                          : "w-[5px] bg-gray-500"
                      } rounded-full`}
                      animate={{
                        scale: activeIndex === index ? 1.2 : 1,
                        opacity: activeIndex === index ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side - Placeholder for 3D Steps */}
            <motion.div
              variants={itemVariants}
              className=" relative border-t-[1px] lg:border-t-0 lg:border-l-[1px]  border-[#404040] mx-auto w-full  md:w-[600px] mt-3 lg:mt-0 pl-0  md:pl-5 pt-12 h-[280px]"
            >
              {/* Add 3D visuals or steps here if needed */}
              {currentSteps.map((step, index) => (
                <div key={index}>
                  <div
                    className={` flex  items-center justify-start mb-[27px] xs:mb-[21px] md:mb-4
                ${index % 2 !== 0 ? "xs:justify-end justify-start" : " "}
                `}
                    onClick={() => handleRightSectionClick(index)}
                    key={index}
                  >
                    {/* text and line parent div */}
                    <div
                      className={`flex w-full overflow-hidden cursor-pointer  justify-start items-center
                   ${index % 2 !== 0 ? "xs:flex-row-reverse " : ""}
                  `}
                    >
                      <div
                        ref={(el) => (labelRefs.current[index] = el)}
                        className={`p-1  text-[10px] xs:text-xs md:text-base rounded-lg px-1 transition-all duration-700 flex ${
                          activeIndex === index
                            ? "bg-[#4848FF] text-white"
                            : "bg-gray-700 text-[#CCCCCC]"
                        }`}
                      >
                        {step.number}. {step.title}{" "}
                      </div>
                      <div
                        style={{ width: lineWidths[index] ?? 0 }}
                        className={`h-[2px] md:h-[3px] border-b-2 transition-all duration-300 border-dotted ${
                          activeIndex === index
                            ? "border-[#4848FF]"
                            : "border-white"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    ref={imageColumnRef}
                    className=" absolute -top-[6px] flex flex-col justify-center  items-center w-[20%] h-5/6 left-[70%] xs:left-[45%] mx-auto gap-2 md:gap-[6.5px]"
                  >
                    {[...Array(3)].map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-[100px] h-[42px] xs:h-[41px]  perspective-1000   rounded-full  cursor-pointer `}
                      >
                        <img
                          width={50}
                          height={50}
                          onClick={() => handleRightSectionClick(imgIndex)}
                          src={
                            activeIndex === imgIndex
                              ? Blueimage // Active Image
                              : grayimage // Default Image
                          }
                          alt={`Step ${index + 1} Image ${imgIndex + 1}`}
                          className="w-full h-full rotate-x--30 transition-3d object-cover   rounded-full "
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}

              {/*  <div className="absolute top-10 w-40 h-5/6 left-[40%] mx-auto bg-red-500">
                   
            </div> */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-[#0B0B14] border border-[#404040] rounded-xl max-w-xl w-full p-6 text-white"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <motion.h3
                  className="text-lg md:text-xl font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {currentSteps[activeIndex].title}
                </motion.h3>
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-300 hover:text-white"
                  aria-label="Close"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  ✕
                </motion.button>
              </div>
              <motion.p
                className="text-sm md:text-base text-[#CCCCCC]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {descriptionText}
              </motion.p>
              <motion.div
                className="mt-6 flex justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#4848FF] hover:bg-[#4848FF]/90 text-white px-4 py-2 rounded-full"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(72, 72, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;
