import React, { memo } from "react";
//import ReactPlayer from "react-player";
import styles from "./player.module.css";

const Player = memo(({ videoInfo, videoInfo: { snippet } }) => {
  const { description, title, channelTitle } = snippet;
  console.log(description);
  return (
    <>
      <iframe
        type="text/html"
        src={`https://youtube.com/embed/${videoInfo.id}`}
        frameBorder="0"
        title="youtube video player"
        className={styles.player}
        allowFullScreen
      ></iframe>
      {/* <ReactPlayer
        width="100%"
        height="450px"
        url={`https://youtu.be/${props.videoUrl}`}
        controls
      /> */}
      <div className={styles.desc}>
        <h2>{title}</h2>
        <h3>{channelTitle}</h3>
        <pre className={styles.description}>{description}</pre>
      </div>
    </>
  );
});

export default Player;
