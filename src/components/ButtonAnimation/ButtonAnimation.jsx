import React, { useState } from "react";

const ButtonAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <a
      href="/#"
      className="animation-button"
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setIsAnimating(false)}
    >
      {isAnimating ? "Let's go" : "Find out more"}
    </a>
  );
};

export default ButtonAnimation;
