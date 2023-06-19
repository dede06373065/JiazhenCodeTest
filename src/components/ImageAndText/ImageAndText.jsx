import React from "react";

const ImageAndText = ({ picture, text, isReverse }) => {
  return (
    <div
      className={`image-text-wrapper ${
        isReverse ? "image-text-reverse" : "image-text"
      }`}
    >
      <div className="image-text-img">
        <img src={picture} alt={picture} width="100%" />
      </div>
      <div className="image-text-detail">{text}</div>
    </div>
  );
};

export default ImageAndText;
