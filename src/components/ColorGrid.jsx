import { motion } from "framer-motion";

let colors = ["blue"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let Box = () => {
  const Color = getRandomColor();

  return (
    <div className="border-[1px]">
      <motion.div
        className="mx-auto size-4 border"
        style={{ backgroundColor: Color, opacity: 0 }}
        whileHover={{ opacity: 1, transition: { duration: 0 } }}
        transition={{ duration: 1.2 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    </div>
  );
};

function ColorGrid() {
  const boxes = [];

  for (let i = 0; i <= 1500; i++) {
    boxes.push(<Box key={i} />);
  }

  return (
    <div className="mx-auto mt-16 flex h-[10vh] w-full flex-wrap justify-start overflow-hidden bg-black">
      {boxes}
    </div>
  );
}

export default ColorGrid;
