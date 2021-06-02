import React, { memo } from "react";
import styles from "./video.module.css";

const Video = memo(({ video, video: { snippet }, handleClick, display }) => {
  const title = ConvertSystemSourcetoHtml(snippet.title);
  const displayType = display === "list" ? styles.list : styles.grid;
  function ConvertSystemSourcetoHtml(str) {
    return str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#39;/g, "'");
  }

  return (
    <li
      className={`${styles.video} ${displayType}`}
      onClick={() => handleClick(video)}
    >
      <img
        className={styles.image}
        src={snippet.thumbnails.medium.url}
        alt="videoImg"
      />
      <span>
        <span className={styles.title}>{title}</span>
        <span className={styles.channel}>{snippet.channelTitle}</span>
      </span>
    </li>
  );
});

export default Video;
