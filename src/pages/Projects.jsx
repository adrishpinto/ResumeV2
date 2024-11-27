import React, { useEffect, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

function Card1({ image, label, about, git_link, live_link, from, to }) {
  const ref = useRef(null);
  const [view, setView] = useState(false);
  const [viewDelay, setViewDelay] = useState(false);

  useEffect(() => {
    if (view == true) {
      setViewDelay(true);
    } else {
      const timer = setTimeout(() => {
        setViewDelay(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [view]);

  const inView = useInView(ref, {
    margin: `0px 0px -40% 0px`,
  });

  return (
    <motion.div
      ref={ref}
      className="sticky top-[52vh] mb-[192px] flex h-[60vh] w-[89vw] flex-col overflow-hidden rounded-xl sm:top-[32vh] sm:h-[70vh] md:w-[67vw] lg:w-[55vw]"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex h-[130px] w-full flex-col items-center justify-center rounded-t-xl bg-gray-900 px-3 text-2xl font-bold text-white sm:flex-row sm:justify-between">
        <h1 className="font-sans text-xl font-[400] tracking-tighter text-white sm:text-4xl">
          {label}
        </h1>
        <button
          className="mt-2 rounded border bg-gray-900 px-2 font-sans text-lg font-thin sm:mt-0 sm:px-2 sm:py-1 sm:text-2xl"
          onClick={() => setView(true)}
        >
          View More
        </button>
      </motion.div>
      <AnimatePresence>
        {view && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.3,
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
            className="absolute left-0 top-0 h-full w-full bg-gray-900 p-10 pt-9"
          >
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="font-sans text-[20px] font-thin sm:text-[40px]">
                {label}
              </p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: view ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.01,
                  },
                }}
                className="mt-2 w-fit border px-1 font-sans text-lg font-thin sm:mt-0 sm:px-2 sm:py-1 sm:text-2xl"
                onClick={() => setView(false)}
              >
                View Less
              </motion.button>
            </div>
            <p className="mt-10 font-sans text-2xl">{about}</p>
            <div className="mt-10">
              <a
                href="https://ims-frontend-ashen.vercel.app/"
                className="white border-b-2 text-xl tracking-tight"
              >
                GITHUB LINK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={live_link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full"
      >
        <div className={`bg-gradient-to-r from-${from} to-${to} h-full w-full`}>
          <div className="invisible">.</div>
          <motion.img
            src={image}
            whileHover={{
              scaleX: viewDelay ? 1.0 : 1.2,
              scaleY: viewDelay ? 1.0 : 1.3,
            }}
            className="mx-auto mt-7 w-[85%] rounded-2xl hover:cursor-pointer"
          />
        </div>
      </a>
    </motion.div>
  );
}

const Card = ({ image, label, about, live_link, git_link, from, to }) => {
  const vMargin = 30;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: ref,
    once: false,
  });

  const color = useTransform(scrollYProgress, [0, 1], ["#000000", "#111827"]);
  const color2 = useTransform(scrollYProgress, [0, 1], ["#000000", "#111827 "]);

  const [styles, setStyles] = useState({
    scale: 1.0,
    filter: 0,
    color: "white",
  });

  const inView = useInView(ref, {
    margin: `0px 0px -${100 - vMargin}% 0px`,
  });

  const inView1 = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setStyles({ scale: 1, color: "white" });
    } else {
      setStyles({ scale: 1, color: "black" });
    }
  }, [inView]);

  const [view, setView] = useState(false);
  const [viewDelay, setViewDelay] = useState(false);

  useEffect(() => {
    if (view == true) {
      setViewDelay(true);
    } else {
      const timer = setTimeout(() => {
        setViewDelay(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [view]);
  return (
    <motion.div
      ref={ref}
      className="sticky top-[52vh] mb-[50px] flex h-[60vh] w-[90vw] flex-col overflow-hidden rounded-xl sm:top-[32vh] sm:h-[70vh] md:w-[67vw] lg:w-[55vw]"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `scale(${styles.scale})`,
      }}
    >
      <div className="h-full">
        <motion.div
          className="flex h-[100px] w-full flex-col items-center justify-center rounded-t-xl px-3 text-2xl font-bold text-white sm:flex-row sm:justify-between"
          style={{ backgroundColor: color }}
        >
          <Slide title={label} inView={inView1} />
          <motion.button
            className="mt-2 rounded border px-2 font-sans text-lg font-thin sm:mt-0 sm:px-2 sm:py-1 sm:text-2xl"
            style={{ backgroundColor: color2 }}
            onClick={() => setView(true)}
          >
            View More
          </motion.button>
        </motion.div>
        <AnimatePresence>
          {view && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
                type: "spring",
                damping: 20,
                stiffness: 100,
              }}
              className="absolute left-0 top-0 h-full w-full bg-gray-900 p-10 pt-9"
            >
              <div className="flex flex-col items-center justify-between sm:flex-row">
                <p className="font-sans text-[20px] font-thin sm:text-[40px]">
                  {label}
                </p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: view ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.01,
                    },
                  }}
                  className="mt-2 w-fit border px-1 font-sans text-lg font-thin sm:mt-0 sm:px-2 sm:py-1 sm:text-2xl"
                  style={{ backgroundColor: color }}
                  onClick={() => setView(false)}
                >
                  View Less
                </motion.button>
              </div>
              <p className="mt-10 font-sans text-2xl">{about}</p>
              <div className="mt-10">
                <a
                  href="https://ims-frontend-ashen.vercel.app/"
                  className="white border-b-2 text-xl tracking-tight"
                >
                  GITHUB LINK
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href={live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="h-full w-full"
        >
          <div
            className={`from-${from} to-${to} h-full w-full bg-gradient-to-r`}
          >
            <div className="invisible">.</div>
            <motion.img
              src={image}
              whileHover={{
                scaleX: viewDelay ? 1.0 : 1.2,
                scaleY: viewDelay ? 1.0 : 1.3,
              }}
              className="mx-auto mt-5 w-[85%] rounded-2xl hover:cursor-pointer"
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const ImageMap = () => {
  return (
    <div className="roboto mt-[120px] flex min-h-screen flex-col items-center overflow-x-visible bg-black">
      <section
        className={`sticky top-[270px] mb-[186px] flex justify-center text-5xl font-[900] tracking-tighter sm:top-24 md:text-7xl lg:text-[110px]`}
      >
        PROJECTS
      </section>
      <Card1
        image={project1}
        label="Data Visualization"
        about="This project refines and processes a dataset of 1,000 items using various functions to ensure the data is valid and relevant,this processed data is then used with Charts.js to create interactive Charts."
        live_link="https://dvclient.vercel.app/"
        git_link="https://github.com/adrishpinto/DataVisualization"
        from="cyan-500"
        to="purple-500"
      />
      <section className="relative flex flex-col gap-[10vh] py-[20vh]">
        <Card
          image={project2}
          label="Inventory Mangement System"
          about="This project uses RESTful APIs to provide a shopping page for browsing products, managing the cart, and tracking orders. It also includes an Admin page for managing product listings"
          live_link="https://ims-frontend-ashen.vercel.app/"
          git_link="https://github.com/adrishpinto/ims-deploy"
          from="cyan-500"
          to="purple-500"
        />
        <Card
          image={project3}
          label="Animation Sandbox"
          git_link="https://github.com/adrishpinto/AnimationSandBox"
          live_link="https://animation-sand-box-6kof.vercel.app/"
          from="cyan-500"
          to="purple-500"
        />
      </section>
    </div>
  );
};

export default ImageMap;

const Slide = ({ inView, title }) => {
  return (
    <div className="flex">
      {title.split("").map((char, index) => (
        <motion.div
          key={index}
          className={`ml-[px] font-sans text-xl font-[400] tracking-tighter text-white sm:text-4xl ${
            char === " " ? "w-[10px]" : ""
          }`}
          initial={{ opacity: 0, x: -40 }}
          animate={{
            opacity: inView ? 1 : 0,
            x: inView ? 0 : -40,
          }}
          transition={{
            type: "tween",
            duration: 0.3,
            delay: (0.05 * index) / 3,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.div>
      ))}
    </div>
  );
};

// old image

// <a
//           href={live_link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-full h-fit"
//         >
//           <div className="from-cyan-500 to-purple-500 bg-gradient-to-r w-full h-full">
//             <div className="invisible">.</div>
//             <motion.img
//               src={image}
//               className="mt-12 w-[85%] mx-auto rounded-2xl hover:cursor-pointer z-[-1]"
//             />
//           </div>
//         </a>
