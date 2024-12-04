import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState(text[0]);

  const [index, setIndex] = useState(1);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, speed, isTyping]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 className="mt-5 flex items-center justify-center text-center text-2xl font-thin text-white sm:text-left sm:text-4xl">
      {displayedText}
    </h1>
  );
};

export default TypingEffect;
