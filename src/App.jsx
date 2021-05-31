import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Videos from "./components/videos/videos";
import Header from "./components/header/header";
import Player from "./components/player/player";

function App({ youtube }) {
  const [videoData, setVideoData] = useState([]);
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoClicked, setVideoClicked] = useState(false);

  const search = (query) => {
    youtube //
      .search(query)
      .then((videos) => setVideoData(videos));

    setVideoClicked(false);
  };

  const handleVideoClick = (videoInfo) => {
    setVideoInfo(videoInfo);
    setVideoClicked(true);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideoData(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header handleClick={search} />
      <section className={styles.section}>
        {videoClicked && (
          <article className={styles.show__view}>
            <Player videoInfo={videoInfo} />
          </article>
        )}
        <article className={videoClicked ? styles.listView : ""}>
          <Videos
            videos={videoData}
            handleClick={handleVideoClick}
            display={videoClicked ? "list" : "grid"}
          />
        </article>
      </section>
    </div>
  );
}

export default App;
