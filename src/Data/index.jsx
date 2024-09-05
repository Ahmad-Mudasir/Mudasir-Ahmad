/* Links of social media */
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { BsFillPersonVcardFill, BsFileCodeFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiContactsBook3Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";

/* Eduction Image */
import degree from "../assets/degree.jpeg";
import database from "../assets/database.png";
import React from "../assets/react.png";
/* import projectImage4 from "../assets/project4.jpeg";
  import projectImage5 from "../assets/project5.jpeg";
  import projectImage6 from "../assets/project6.jpeg"; */
import CodeAlpha from "../assets/CodeAlpha.png";

import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";
import { SiVisualstudio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  {
    label: "Projects",
    href: "#projects",
    icon: <GrProjects />,
    dis: "translate-x-[-375px]",
    disMobile: "translate-y-[0]",
  },
  {
    label: "Bio",
    href: "#bio",
    icon: <BsFillPersonVcardFill />,
    dis: "translate-x-[-250px]",
    disMobile: "translate-y-[73px]",
  },
  {
    label: "Skills",
    href: "#skills",
    icon: <GiSkills />,
    dis: "translate-x-[-133px]",
    disMobile: "translate-y-[140px]",
  },
  {
    label: "Work Experience",
    href: "#work",
    icon: <BsFileCodeFill />,
    dis: "translate-x-8",
    disMobile: "translate-y-[209px]",
  },
  {
    label: "Education",
    href: "#education",
    icon: <PiStudentFill />,
    dis: "translate-x-[214px]",
    disMobile: "translate-y-[280px]",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <RiContactsBook3Fill />,
    dis: "translate-x-[373px]",
    disMobile: "translate-y-[345px]",
  },
];

export const HERO = {
  name: "Mudasir Ahmad",
  greet: "Hello there! 👋🏻",
  description:
    "Recent BS Computer Science graduate with a strong foundation in web development, having completed numerous projects during academic tenure. Experienced in full-stack development, including both front-end and back-end technologies.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "GitSearch",
    description:
      "The GitHub Repo Search Project allows users to search for GitHub repositories by entering a keyword. It retrieves repository data using the GitHub REST API and displays the results dynamically on the web page.",
    image: projectImage1,
    live: "https://ahmad-mudasir.github.io/Github-Repo-Search/",
    githubLink: "https://github.com/Ahmad-Mudasir/Github-Repo-Search.git",
  },
  {
    id: 2,
    name: "Keeper Web App",
    description:
      "  The Keeper Web App allows users to create, view, and delete notes. The app features an intuitive and responsive user interface, making it easy to manage notes in a visually appealing way.",
    image: projectImage2,
    live: "https://keeper-web-app-xaks.vercel.app/",
    githubLink: "https://github.com/Ahmad-Mudasir/Keeper-Web-App.git",
  },
  {
    id: 3,
    name: "Responsive Social-Media Clone",
    description:
      "I've developed a Responsible social media platform using HTML, CSS And JS, featuring customizable themes. Divided into three distinct sections—left, middle, and right—the platform offers users the freedom to personalize font sizes and colors according to their preferences.",
    image: projectImage3,
    live: "https://ahmad-mudasir.github.io/Responsive-social-website-CodeAlphaTask2/",
    githubLink:
      "https://github.com/Ahmad-Mudasir/Responsive-social-website-CodeAlphaTask2.git",
  },
];

export const BIO = [
  {
    paragraph:
      " Hello, I'm Mudasir Ahmad, a passionate web developer with a strong foundation in  front-end and back-end technologies. With expertise in React, JavaScript, Node.js,Express, SQL, and PostgreSQL, I have created numerous projects that showcase my skills in responsive design, user experience, and full-stack development.I'm dedicated to continuous learning and love tackling new challenges that push my limits and help me grow as a developer. My journey in the tech world began with a deep curiosity for how things work.This curiosity has driven me to learn and master various programming languages and frameworks. I'm particularly passionate about building web applications that are not only functional but also visually appealing and user-friendly In addition to my technical skills, I value collaboration and enjoy working in teams to bring creative ideas to life. I am always eager to explore new opportunities and am committed to delivering high-quality work in every project I undertake.",
    style: "shadow-gray-400",
  },
];

export const SKILLS = [
  { 
    id: 0,
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    style: "shadow-cyan-400",
   
  },
  {
    id: 1,
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "javascript",
    style: "shadow-yellow-500",
  },

  {
    id: 2,
    icon: <RiTailwindCssFill className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Tailwind",
    style: "shadow-sky-400",
  },
  {
    id: 3,
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    style: "shadow-green-500",
  },

  {
    id: 4,
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    style: "shadow-lime-600",
  },
  {
    id: 5,
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    style: "shadow-sky-700",
  },
  {
    id: 6,
    icon: <DiMsqlServer className="text-4xl text-red-400 lg:text-5xl" />,
    name: "SQL",
    style: "shadow-red-400",
  },
  {
    id: 7,
    icon: <FaGithub className="text-4xl text-gray-400 lg:text-5xl" />,
    name: "GitHub",
    style: "shadow-gray-400",
  },

  {
    id: 8,
    icon: <SiVisualstudio className="text-4xl text-blue-400 lg:text-5xl" />,
    name: "Visual Studio Code",
    style: "shadow-blue-400",
  },
];

export const EXPERIENCES = [
  {
    id: "0",
    title: "Frond-end Internship",
    company: "Code Alpha",
    description:
      "I successfully completed my internship, focusing on front-end web development.Enhanced user experience by developing responsive and interactive web applications. Streamlined codebase by refactoring HTML, CSS, and JavaScript for improved performance and maintainability. Utilized version control tools like Git to manage code within a team  environment, reducing merge conflicts and fostering collaboration. I gained hands-on experience with modern web development tools and frameworks, improving my technical and problem-solving skills.",
    timePeriod: "March 2024 - April 2024",
    img: CodeAlpha,
  },

]
 
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://www.facebook.com/profile.php?id=100006930331146&mibextid=JRoKGi",
      icon: <FaFacebookSquare fontSize={25} className="  hover:opacity-80" />,
    },
    
    {
      href: "https://www.instagram.com/ahmad_nawaaz11?igsh=MXJmdXFrdjIzM2toaA%3D%3D&utm_source=qr",
      icon: <FaInstagram fontSize={25} className="text- hover:opacity-80" />,
    },
    
    {
      href: "https://github.com/Ahmad-Mudasir",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/mudasir-ahmad1/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
   
];

export const educationData = [
  {
    id: 1,
    collegeName: "University Of Agriculture Peshawar",
    degree: "Bachelor of Science in Computer Science",
    cgpa: "CGPA:3.59/4.0",
    timePeriod: "2020 - 2024",
    certificateImage: degree,
  },

  {
    id: 2,
    collegeName: "University of Colorado",
    degree: "Database Management Essentials",

    timePeriod: "Jun 5 2022",
    certificateImage: database,
  },

  {
    id: 3,
    collegeName: "Coursera",
    degree: "Introduction to Front-end Development with ReactJS",

    timePeriod: "Feb 16, 2024",
    certificateImage: React,
  },
];
