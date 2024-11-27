import React from "react";

const TechnicalTitle = ({ text }) => {
  const [number, title] = text.split(". ").map((part) => part.trim());
  return (
    <div className="sticky top-8">
      <div className="flex">
        <h1
          className="relative text-4xl font-semibold uppercase text-white"
          style={{
            textShadow:
              "1px 1px 0 rgba(6, 182, 212, 0.9), " +
              "2px 2px 0 rgba(6, 182, 212, 0.9), " +
              "3px 3px 0 rgba(6, 182, 212, 0.5)",
          }}
        >
          {number}.{" "}
        </h1>
        <h1
          className="relative ml-2 w-72 text-4xl font-semibold uppercase text-white"
          style={{
            textShadow:
              "1px 1px 0 rgba(6, 182, 212, 0.9), " +
              "2px 2px 0 rgba(6, 182, 212, 0.9), " +
              "3px 3px 0 rgba(6, 182, 212, 0.5)",
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TechnicalTitle;
