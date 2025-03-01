import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import img from "../../assests/Untitled design (4).png";
import { Typewriter } from "react-simple-typewriter";
import { PiSealCheckBold } from "react-icons/pi";
import { Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: false, amount: 0.3 });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: false, amount: 0.5 });

  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: false, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="w-full">
      <motion.section
        ref={bannerRef}
        className="min-h-screen w-11/12 md:w-10/12 mx-auto flex md:flex-row flex-col-reverse items-center justify-between my-10"
      >
        <motion.div
          ref={textRef}
          className="md:w-1/2"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          <motion.h1
            className="md:text-4xl text-xl font-bold md:mb-6 decoration-dashed"
            initial={{ opacity: 0, x: -20 }}
            animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Md. Abdul Wahab Mridul
          </motion.h1>

          <motion.p
            className="md:text-[86px] text-2xl font-bold md:mb-8 my-2"
            style={{
              background: "linear-gradient(90deg, #00c2ff, #ff00e5, #00c2ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              backgroundSize: "200% 100%",
              color: "transparent",
              position: "relative",
              display: "inline-block",
            }}
            initial={{ opacity: 0 }}
            animate={
              textInView
                ? {
                    opacity: 1,
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : { opacity: 0 }
            }
            transition={{
              opacity: { delay: 0.4, duration: 0.6 },
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Engineer",
                "Human Being",
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="md:text-xl font-bold mb-8">
              Based in Rajshahi, Bangladesh
            </h2>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              damping: 15,
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 154, 230, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="md:px-5 px-2 flex items-center gap-2 py-3 md:py-4 rounded-sm bg-[#009AE6] p-6 cursor-pointer"
            >
              <motion.div
                animate={
                  textInView
                    ? {
                        y: [0, -3, 0],
                        rotate: [0, -5, 0, 5, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 1,
                }}
              >
                <Download />
              </motion.div>
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                borderWidth: "2px",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#009AE6] md:px-5 px-2 rounded-sm flex gap-2 items-center cursor-pointer"
            >
              <motion.div
                animate={
                  textInView
                    ? {
                        scale: [1, 1.2, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 2,
                }}
              >
                <PiSealCheckBold />
              </motion.div>
              Hire Me
            </motion.button>
          </motion.div>

          <motion.div className="flex mt-3 gap-3">
            {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  textInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0 }
                }
                transition={{
                  delay: 1 + index * 0.15,
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.2,
                  color: "#41C6FB",
                  transition: { duration: 0.2 },
                }}
              >
                <a
                  href={
                    [
                      "https://github.com/MRiDuL-ICE",
                      "https://www.linkedin.com/in/wahabmridul-ice/",
                      "https://www.facebook.com/wahabmridul",
                    ][index]
                  }
                  target="_blank"
                >
                  <Icon className="text-3xl text-[#0099ED]" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="md:w-1/2 h-full rounded-full flex justify-end items-center"
          style={{
            scale: imageScale,
            opacity: imageOpacity,
          }}
          animate={
            imageInView
              ? {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }
              : {
                  opacity: 0,
                  scale: 0.8,
                  x: 50,
                }
          }
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          <motion.div className="relative">
            <motion.img
              className="md:w-[850px] md:h-[700px] w-[650px] h-[258px] object-contain rounded-full flex justify-end items-end md:mt-0 mt-10 md:translate-x-20"
              src={img}
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Banner;
