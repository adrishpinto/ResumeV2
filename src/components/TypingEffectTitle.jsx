import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const text = "FullStack Developer ";
  const speed = 70;
  const [Text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setText((prev) => prev + text[index]);
        setIndex((prev) => {
          return prev + 1;
        });
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [index]);

  return (
    <h1 className="mx-auto w-fit text-center text-2xl font-thin text-white sm:text-left sm:text-4xl lg:ml-24 lg:mt-5">
      {Text}
      {showCursor && (
        <span className="animate-blink border-r-2 border-white"></span>
      )}
    </h1>
  );
};

export default TypingEffect;
