import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Videos from "./components/videos/videos";
import Header from "./components/header/header";
import Player from "./components/player/player";

function App({ youtube }) {
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoInfo, setVideoInfo] = useState(null);
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
    setVideoInfo(videoInfo);
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
}

export default App;
