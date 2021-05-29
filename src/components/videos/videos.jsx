import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";

const Videos = (props) => {
  const videoData = props.videos;

  return (
    <ul className={styles.videos}>
      {videoData.map((item) => (
        <Video
          key={item.id}
          id={item.id}
          imgSrc={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          description={item.snippet.description}
          handleClick={props.handleClick}
        />
      ))}
    </ul>
  );
};

export default Videos;
