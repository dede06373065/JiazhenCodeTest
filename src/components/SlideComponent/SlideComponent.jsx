import React from "react";

const SlideComponent = ({ item, position }) => {
  return (
    <div className="slide-wrapper">
      <div className="slide-img-container">
        <img src={item.image} alt="abc" width="100%" />
      </div>
      <div className="slide-detail-container">{item.detail}</div>
    </div>
  );
};

export default SlideComponent;
