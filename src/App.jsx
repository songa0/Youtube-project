import React, { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import Videos from "./components/videos/videos";
import Header from "./components/header/header";
import Player from "./components/player/player";

function App({ youtube }) {
  const [videoData, setVideoData] = useState([]);
  const [videoInfo, setVideoInfo] = useState([]);
  const [videoClicked, setVideoClicked] = useState(false);

  const search = useCallback(
    //props로 자식 컨포넌트에 콜백함수를 전달할때는 rerender가 발생됨. -> useCallback을 사용하여 rerender되지 않도록 함.
    (query) => {
      youtube //
        .search(query)
        .then((videos) => setVideoData(videos));

      setVideoClicked(false);
    },
    [youtube]
  );

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
          <article className={styles.showView}>
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
