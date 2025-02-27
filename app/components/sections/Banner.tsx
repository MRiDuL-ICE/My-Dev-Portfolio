import { motion } from "framer-motion";
import img from "../../assests/Untitled design (4).png";

const Banner = () => {
  return (
    <motion.section className="min-h-screen flex items-center justify-center my-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 className="text-5xl font-bold mb-6">
          Hi, I'm Abdul Wahab
        </motion.h1>
        <motion.p className="text-xl mb-8">
          A Senior Software Engineer specializing in React and Node.js
        </motion.p>
        <motion.div className="flex gap-4">
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
