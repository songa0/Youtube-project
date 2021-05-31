import React, { memo } from "react";
//import ReactPlayer from "react-player";
import styles from "./player.module.css";

const Player = memo((props) => {
  const { id, channel, title, description } = props.videoInfo;

  return (
    <>
      <iframe
        type="text/html"
        src={`https://youtube.com/embed/${id}`}
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
        <h3>{channel}</h3>
        {description
          ? description.split("\n").map((word) => {
              return (
                <span>
                  {word}
                  <br />
                </span>
              );
            })
          : ""}
      </div>
    </>
  );
});

export default Player;
