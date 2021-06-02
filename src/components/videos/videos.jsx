import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";

const Videos = ({ videos, handleClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((item) => (
        <Video
          key={item.id}
          video={item}
          handleClick={handleClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default Videos;
