import React, { useEffect } from "react";

const StarryBackground = () => {
  useEffect(() => {
    const starryBackground = document.querySelector(".starry-background");
    const numberOfStars = 100;

    const createStar = () => {
      const star = document.createElement("div");
      star.className = "star2";

      const x = Math.random() * 97;
      const y = Math.random() * 1000;
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 2 + 1;

      star.style.position = "absolute";
      star.style.backgroundColor = "white";
      star.style.borderRadius = "50%";
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}vw`;
      star.style.top = `${y}vh`;
      star.style.animation = `twinkle ${duration}s infinite alternate`;

      starryBackground.appendChild(star);
    };

    for (let i = 0; i < numberOfStars; i++) {
      createStar();
    }

    return () => {
      starryBackground.innerHTML = "";
    };
  }, []);

  return <div className="starry-background"></div>;
};

export default StarryBackground;
