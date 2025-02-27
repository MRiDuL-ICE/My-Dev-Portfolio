import { motion } from "framer-motion";
import img from "../assests/Untitled design (4).png";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 className="text-5xl font-bold mb-6" variants={itemVariants}>
          Hi, I'm Abdul Wahab
        </motion.h1>
        <motion.p className="text-xl mb-8" variants={itemVariants}>
          A Senior Software Engineer specializing in React and Node.js
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 rounded-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      <div className="h-[750px] w-[850px] rounded-full flex justify-center items-center">
        <img className="w-[850px] h-[700px] rounded-full" src={img} alt="" />
      </div>
    </motion.section>
  );
};

export default Banner;
