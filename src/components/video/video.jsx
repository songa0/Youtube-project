import React, { memo, useState } from "react";
import styles from "./video.module.css";

const Video = memo((props) => {
  const { id, imgSrc, channel, description, display } = props;
  const title = ConvertSystemSourcetoHtml(props.title);
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

  const handleClick = () => {
    const videoInfo = {
      id,
      description,
      title,
      channel,
    };
    props.handleClick(videoInfo);
  };

  return (
    <li className={`${styles.video} ${displayType}`} onClick={handleClick}>
      <img className={styles.image} src={imgSrc} />
      <span>
        <span className={styles.title}>{title}</span>
        <span className={styles.channel}>{channel}</span>
      </span>
    </li>
  );
});

export default Video;
