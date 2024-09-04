import logo from "../assets/ahmadLogo.png";
import { SOCIAL_MEDIA_LINKS } from "../Data";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-start "
      >
        <img src={logo} alt="logo" width={200} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            className="text-[#0ef] rounded-lg  hover:shadow-lg hover:shadow-[#0ef] "
          >
            {link.icon}
          </a>
        ))}
      </motion.div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;Ahmad. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
