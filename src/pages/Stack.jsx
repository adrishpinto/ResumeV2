import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import react from "../assets/react.webp";
import node from "../assets/node.png";
import framermotion from "../assets/framer-motion.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import moon from "../assets/moon.png";
import express from "../assets/express.png";

function StackItem({ text, img, desc }) {
  const [flip, setFlip] = useState(1);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale2 = useTransform(scrollYProgress, [0, 0.6], [1.1, 1.25]);

  const delayedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });
  const scale1 = useTransform(delayedScrollYProgress, [0, 0.6], [1.1, 1.25]);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          ref={ref}
          className={`${flip == 1 ? "bg-gray-900 bg-opacity-80" : "bg-gray-900 bg-opacity-30"} mx-12 my-10 mt-20 w-fit rounded-2xl border-[5px] border-gray-500 border-opacity-10 px-10 py-10 pb-8`}
          style={{ scale: scale1 }}
          onClick={() => setFlip((prev) => !prev)}
        >
          <motion.img
            whileHover={{ scale: 0.85 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: flip ? 1 : 0 }}
            src={img}
            className="size-[170px] hover:scale-75 hover:cursor-pointer"
            alt="React Logo"
          />
          <motion.p
            className={`absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 transform text-2xl font-thin hover:cursor-pointer`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: flip ? 0 : 1,
              visibility: flip ? "hidden" : "visible",
            }}
          >
            {desc}
          </motion.p>

          <motion.h1
            className="mt-2 text-center text-3xl font-light"
            initial={{ opacity: 1 }}
            animate={{ opacity: flip ? 1 : 0 }}
          >
            {text}
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StackItemSM({ text, img, desc }) {
  const [flip, setFlip] = useState(1);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale2 = useTransform(scrollYProgress, [0, 0.6], [1.1, 1.2]);
  const delayedScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
    delay: 0.5,
  });
  const scale1 = useTransform(delayedScrollYProgress, [0, 0.6], [1.1, 1.25]);

  return (
    <motion.div
      className={`${flip == 1 ? "bg-gray-900 bg-opacity-80" : "bg-gray-900 bg-opacity-30"} mx-12 my-10 mt-20 w-fit rounded-2xl border-[5px] border-gray-500 border-opacity-10 px-10 py-10 pb-8`}
      ref={ref}
      style={{ scale: scale2 }}
      onClick={() => setFlip((prev) => !prev)}
    >
      <motion.img
        whileHover={{ scale: 0.85 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: flip ? 1 : 0 }}
        src={img}
        className="size-[150px] sm:size-[170px]"
        alt={text}
      />
      <motion.p
        className={`absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 transform text-2xl font-thin hover:cursor-pointer`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: flip ? 0 : 1,
          visibility: flip ? "hidden" : "visible",
        }}
      >
        {desc}
      </motion.p>

      <motion.h1
        className="mt-2 text-center text-xl font-light sm:text-3xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: flip ? 1 : 0 }} // Hide text when flipped
      >
        {text}
      </motion.h1>
    </motion.div>
  );
}

function Stack() {
  return (
    <div className="relative mb-20 mt-28 sm:mt-32">
      <div className="flex flex-col items-center">
        <div className="text-[12vw] font-bold hover:cursor-pointer sm:mb-0 sm:text-[7vw]">
          <span className="duration-300 hover:text-red-500 hover:transition">
            M
          </span>
          <span className="duration-300 hover:text-orange-500 hover:transition">
            y
          </span>
          <span className="duration-300 hover:text-yellow-500 hover:transition">
            {" "}
          </span>
          <span className="duration-300 hover:text-green-500 hover:transition">
            S
          </span>
          <span className="duration-300 hover:text-blue-500 hover:transition">
            t
          </span>
          <span className="duration-300 hover:text-indigo-500 hover:transition">
            a
          </span>
          <span className="duration-300 hover:text-purple-500 hover:transition">
            c
          </span>
          <span className="duration-300 hover:text-pink-500 hover:transition">
            k
          </span>
        </div>
        <div className="relative mx-auto hidden w-[80%] flex-wrap items-center justify-center sm:flex">
          <StackItem
            text="React"
            img={react}
            desc="A JavaScript library for building user interfaces"
          />
          <StackItem
            text="CSS"
            img={css}
            desc="A stylesheet language used for designing web pages"
          />
          <StackItem
            text="TailwindCSS"
            img={tailwind}
            desc="A utility-first CSS framework for rapid UI development"
          />
          <StackItem
            text="FramerMotion"
            img={framermotion}
            desc="A library for animations in React"
          />
          <StackItem
            text="JavaScript"
            img={javascript}
            desc="programming language for web development"
          />

          <StackItem
            text="Node.js"
            img={node}
            desc="A JavaScript runtime for server-side programming"
          />

          <StackItem
            text="MongoDB"
            img={mongodb}
            desc="A NoSQL database for modern web applications"
          />

          <StackItem
            text="Express"
            img={express}
            desc="A web framework for Node.js to build APIs"
          />
          <StackItem
            text="Java"
            img={java}
            desc="A versatile, object-oriented programming language"
          />
        </div>

        <div className="sm:hidden">
          <StackItemSM
            text="React"
            img={react}
            desc="A JavaScript library for building user interfaces"
          />
          <StackItemSM
            text="FramerMotion"
            img={framermotion}
            desc="A library for animations in React"
          />
          <StackItemSM
            text="CSS"
            img={css}
            desc="A stylesheet language used for designing web pages"
          />
          <StackItemSM
            text="Node.js"
            img={node}
            desc="A JavaScript runtime for server-side programming"
          />
          <StackItemSM
            text="TailwindCSS"
            img={tailwind}
            desc="A utility-first CSS framework for rapid UI development"
          />
          <StackItemSM
            text="JavaScript"
            img={javascript}
            desc="A programming language for web development"
          />
          <StackItemSM
            text="MongoDB"
            img={mongodb}
            desc="A NoSQL database for modern web applications"
          />
          <StackItemSM
            text="Java"
            img={java}
            desc="A versatile, object-oriented programming language"
          />
          <StackItemSM
            text="Express"
            img={express}
            desc="A web framework for Node.js to build APIs"
          />
        </div>
      </div>
    </div>
  );
}

export default Stack;

{
  /* Parallax moon image */
}

{
  /* <motion.img
          ref={ref}
          src={moon}
          className="absolute right-[30%] h-[400px] top-[-20%]"
          style={{ y: moonY }}
          alt="Moon"
          transition={{ ease: "easeOut", duration: 0.5 }}
        /> */
}
