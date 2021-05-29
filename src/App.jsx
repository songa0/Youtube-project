import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Videos from "./components/videos/videos";
import Header from "./components/header/header";
import Player from "./components/player";

function App({ youtube }) {
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoClicked, setVideoClicked] = useState(false);
  const [videoDesc, setVideoDesc] = useState(null);

  const search = (query) => {
    youtube //
      .search(query)
      .then((videos) => setVideoData(videos));

    setIsLoaded(true);
    setVideoClicked(false);
  };

  const handleVideoClick = (videoInfo) => {
    setVideoUrl(videoInfo.id);
    setVideoDesc(videoInfo.description);
    setVideoClicked(true);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideoData(videos));

    setIsLoaded(true);
  }, []);

  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading.....</div>;
  } else {
    return (
      <div className={styles.app}>
        <Header handleClick={search} />
        <section className={styles.section}>
          <article
            className={
              (styles.play__view,
              videoClicked ? styles.show__view : styles.hide__view)
            }
          >
            <Player videoUrl={videoUrl} videoDesc={videoDesc} />
          </article>
          <article className={styles.list__view}>
            <Videos
              videos={videoData}
              handleClick={handleVideoClick}
              videoClicked={videoClicked}
            />
          </article>
        </section>
      </div>
    );
  }
}

export default App;
