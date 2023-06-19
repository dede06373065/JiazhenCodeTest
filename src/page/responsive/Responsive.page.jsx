import React, { useState, useEffect } from "react";

const ResponsivePage = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Update the windowSize state whenever the window is resized
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const screenType = (width) => {
    if (width < 768) {
      return "Moblie Screen";
    } else {
      if (width > 1280) {
        return "Desktop Screen";
      } else {
        return "Tablet Screen";
      }
    }
  };
  console.log(windowSize.width);
  return (
    <div className="responsive-page">
      <div>{screenType(windowSize.width)}</div>
      <div>Window Width: {windowSize.width}px</div>
      <div>Window Height: {windowSize.height}px</div>
    </div>
  );
};
export default ResponsivePage;
