import { motion } from "framer-motion";
import img from "../../assests/Untitled design (4).png";
import PrimaryBtn from "../shared/Buttons/PrimaryBtn";
import { Typewriter } from "react-simple-typewriter";
import { PiSealCheckBold } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="w-full">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="min-h-screen w-11/12 md:w-10/12 mx-auto flex md:flex-row flex-col-reverse items-center justify-between my-10"
      >
        <motion.div className="md:w-1/2">
          <motion.h1 className="md:text-6xl text-xl font-bold md:mb-6 decoration-dashed  uppercase">
            Md. Abdul Wahab
          </motion.h1>
          <motion.p
            className="md:text-[86px] text-2xl font-bold md:mb-8 my-2"
            style={{
              background: "linear-gradient(90deg, #00c2ff, #ff00e5, #00c2ff)",
              WebkitBackgroundClip: "text",
              animation: "flowGradient 3s linear infinite",
              backgroundClip: "text",
              color: "transparent",
              position: "relative",
              display: "inline-block",
            }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Engineer",
                "Human Beign",
                "Coder!",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </motion.p>
          <div>
            <h2 className="md:text-3xl font-bold mb-8">
              Based in Rajshahi, Bangladesh
            </h2>
          </div>
          <motion.div className="flex gap-4">
            <button className="px-5 flex gap-2 py-4 rounded-sm bg-[#009AE6] p-6  hover:bg-[#006be6] hover:text-white font-bold transform transition-all duration-300">
              <GrProjects />
              View My works
            </button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border border-[#009AE6] px-5 rounded-sm flex gap-2 items-center"
            >
              <PiSealCheckBold />
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div className="md:w-1/2 h-full rounded-full flex justify-end items-center ">
          <motion.img
            className="md:w-[850px] md:h-[700px] w-[650px] h-[258px] object-contain rounded-full flex justify-end items-end md:mt-0 mt-10 md:translate-x-20"
            src={img}
            alt=""
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Banner;
