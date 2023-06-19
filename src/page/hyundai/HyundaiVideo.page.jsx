import React from "react";
import ReactPlayer from "react-player";
import shortVideo from "../../assets/video/shortVideo.mp4";

const HyundaiVideoPage = () => {
  return (
    <div className="hyundai-video-page">
      <div className="hyundai-video-wrapper">
        <ReactPlayer
          className="hyundai-video-item"
          url={shortVideo}
          playing
          muted
          loop
          width="100%"
          height="100%"
        ></ReactPlayer>
        <div className="hyundai-video-item-title">
          <h1>HYUNDAI INNOVATION</h1>
          <div>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
          <div>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
          <div>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </div>
        </div>
      </div>
    </div>
  );
};
export default HyundaiVideoPage;
