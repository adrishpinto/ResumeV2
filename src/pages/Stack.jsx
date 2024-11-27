import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
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

function StackItem({ text, img }) {
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
    <motion.div
      ref={ref}
      className="mx-12 my-10 mt-20 w-fit rounded-2xl border-[5px] border-gray-500 border-opacity-10 bg-gray-900 bg-opacity-80 px-10 py-10 pb-8"
      style={{ scale: scale1 }}
    >
      <motion.img
        whileHover={{ scale: 0.85 }}
        src={img}
        className="size-[170px]"
        alt="React Logo"
      />
      <h1 className="mt-2 text-center text-3xl font-light">{text}</h1>
    </motion.div>
  );
}

function StackItemSM({ text, img }) {
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
      ref={ref}
      className="mx-12 mt-20 w-fit rounded-2xl border-[5px] border-gray-500 border-opacity-10 bg-gray-900 bg-opacity-80 px-10 py-10 pb-8"
      style={{ scale: scale2 }}
    >
      <motion.img
        whileHover={{ scale: 0.85 }}
        src={img}
        className="size-[150px] sm:size-[170px]"
        alt="React Logo"
      />
      <h1 className="mt-2 text-center text-xl font-light sm:text-3xl">
        {text}
      </h1>
    </motion.div>
  );
}

function Stack() {
  return (
    <div className="relative mb-32 mt-52">
      <div className="flex flex-col items-center">
        <div className="text-[12vw] font-bold hover:cursor-pointer sm:mb-20 sm:text-[7vw]">
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
          <StackItem text="React" img={react} />
          <StackItem text="FramerMotion" img={framermotion} />
          <StackItem text="css" img={css} />
          <StackItem text="Nodejs" img={node} />
          <StackItem text="Tailwindcss" img={tailwind} />
          <StackItem text="JavaScript" img={javascript} />
          <StackItem text="MongoDB" img={mongodb} />
          <StackItem text="Java" img={java} />
          <StackItem text="GitHub" img={github} />
        </div>

        <div className="sm:hidden">
          <StackItemSM text="React" img={react} />
          <StackItemSM text="FramerMotion" img={framermotion} />
          <StackItemSM text="css" img={css} />
          <StackItemSM text="Nodejs" img={node} />
          <StackItemSM text="Tailwindcss" img={tailwind} />
          <StackItemSM text="JavaScript" img={javascript} />
          <StackItemSM text="MongoDB" img={mongodb} />
          <StackItemSM text="Java" img={java} />
          <StackItemSM text="GitHub" img={github} />
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
