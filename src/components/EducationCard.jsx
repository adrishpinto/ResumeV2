import { motion } from "framer-motion";
import { useState } from "react";
function EducationCard({ name, course, marks, year, bg, visible, setVisible }) {
  const [isFlipped, setFlipped] = useState("false");
  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };
  return (
    <motion.div
      onClick={handleFlip}
      className="perspective-1000 relative h-40 w-64 cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: isFlipped ? 0 : 180 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Front side */}
      <motion.div
        className={`absolute flex h-40 w-full flex-col items-center justify-center rounded-xl text-xl text-white ${bg} `}
        style={{ backfaceVisibility: 0 }}
      >
        <div className="">{name}</div>
        <div className="text-lg font-thin">{year}</div>
        <div>{course}</div>
        <div>{marks}</div>
      </motion.div>
    </motion.div>
  );
}

export default EducationCard;
