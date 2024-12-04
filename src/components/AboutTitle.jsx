import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MainTitle() {
  const ref = useRef(null);
  const view = useInView(ref, {
    amount: 0.5,
  });

  return (
    <motion.h1
      ref={ref}
      className="tracking-1 z-10 mx-auto mb-10 stroke-orange-300 text-center font-mono text-[70px] font-semibold leading-[1] text-white sm:mb-0 sm:text-[10vw] md:w-[100%]"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{
        opacity: view ? 1 : 0,
        filter: view ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 1 }}
    >
      Joshua Pinto
    </motion.h1>
  );
}

export default MainTitle;
