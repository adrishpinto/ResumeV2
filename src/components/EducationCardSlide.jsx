import { motion, AnimatePresence, spring } from "framer-motion";
import { useState } from "react";

function EducationCardSlide({
  name,
  course,
  marks,
  year,
  bg,
  bg2,
  visible,
  setVisible,
}) {
  const handleToggle = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div
      className="relative h-40 w-64 cursor-pointer overflow-hidden rounded-xl"
      onClick={handleToggle}
    >
      <motion.div
        className={`absolute flex h-full w-full flex-col items-center justify-center rounded-xl text-xl text-white ${bg} transition-all duration-300`}
      >
        <div>{name}</div>
        <div className="text-lg font-thin">{year}</div>
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100% " }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className={`absolute flex h-40 w-full flex-col items-center justify-center rounded-xl ${bg2} text-xl text-white`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="text-center">
                  <div>{course}</div>
                  <div>{marks}</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default EducationCardSlide;
