import React from "react";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypingEffect from "../components/TypingEffect.jsx";
import TypingEffectTitle from "../components/TypingEffectTitle.jsx";
import MainTitle from "../components/AboutTitle.jsx";
function About({ isActive }) {
  const [once, setOnce] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 640;
    }
    return true;
  });

  useEffect(() => {
    const width = window.matchMedia("(max-width: 640px)");
    const viewportChange = (event) => {
      setOnce(event.matches);
    };
    viewportChange(width);
    width.addEventListener("change", viewportChange);
    return () => width.removeEventListener("change", viewportChange);
  }, []);

  const { ref: firstRef, inView: firstInView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <motion.div>
      <div className="mx-4 bg-black sm:mx-40 sm:mt-0 sm:h-full">
        <div className="invisible">.</div>
        <div className="mt-20 flex flex-col sm:items-start">
          <MainTitle />
          <div className="flex w-[100%] flex-col sm:flex-row lg:mt-0">
            <TypingEffectTitle />
            <div className="ml-[30px] mr-0 mt-10 flex flex-col sm:ml-0 lg:mr-14">
              <div
                className="mx-auto flex w-40 items-center underline sm:justify-start"
                onClick={() => {
                  navigator.clipboard.writeText("8618412881"),
                    alert("phone no Copied.");
                }}
              >
                <FaPhoneAlt />
                <h1 className="ml-2 text-xl">8618412881</h1>
              </div>
              <div className="mx-auto flex w-40 items-center underline sm:justify-start">
                <a
                  href="https://github.com/adrishpinto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaGithub />
                  <h1 className="ml-2 text-xl underline">GitHub</h1>
                </a>
              </div>
              <div className="mx-auto flex w-40 items-center underline sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/joshuakamathpinto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaLinkedin />
                  <h1 className="ml-2 text-xl underline">LinkedIn</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* about me */}
        <motion.div
          ref={firstRef}
          className="mt-10 flex flex-col items-center rounded-2xl bg-gray-700 bg-opacity-50 px-5 py-2 text-center sm:mt-32 sm:h-fit md:flex-row md:px-5 md:py-7"
          initial={{ opacity: 0 }}
          animate={firstInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mt-[-20px] sm:w-1/2">
            {firstInView && (
              <TypingEffect
                text="About me"
                cursor={false}
                speed={70}
                delay={200}
              />
            )}
          </div>
          <motion.div
            className="mt-4 block w-full text-left text-lg font-[100] sm:pr-10 sm:text-2xl md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={firstInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Hi, I'm Joshua, a Full-Stack Developer from Bangalore. I have great
            intrests in problem-solving and creative design, and both frontend
            and backend development let me explore these areas and I feel that's
            why I have a great passion for full-stack dev.
          </motion.div>
        </motion.div>

        {/* about site  */}
        <div ref={secondRef}>
          <motion.div
            className="mt-20 flex flex-col items-center rounded-2xl bg-gray-700 bg-opacity-50 px-5 py-2 text-center md:flex-row md:px-5 md:py-10"
            initial={{ opacity: 0 }}
            animate={secondInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mt-[-20px] w-full md:w-1/2">
              {secondInView && (
                <TypingEffect
                  text="About Website"
                  cursor={false}
                  speed={40}
                  delay={200}
                />
              )}
            </div>
            <motion.div
              className="mt-8 block w-full text-left text-lg font-[100] sm:pr-10 sm:text-2xl md:mt-0 md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={
                secondInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: 0 }}
            >
              This website is developed from scratch. The goal was to create a
              central platform to showcase my projects and provide an easier way
              to explore my information beyond the limits of a traditional
              resume.
            </motion.div>
          </motion.div>
        </div>
        <div className=""></div>
      </div>
    </motion.div>
  );
}

export default About;
