import React ,{ useEffect, useState } from 'react';
import styles from './App.module.css';
import Videos from './components/videos/videos';
import Header from './components/header/header';
import Player from './components/player';

function App() {

  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoClicked, setVideoClicked] = useState(false);
  const [videoDesc, setVideoDesc] = useState(null);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    } 
  };

  const handleVideoClick = (videoInfo) => {
    setVideoUrl(videoInfo.id);
    setVideoDesc(videoInfo.description);
    setVideoClicked(true);
  }

  function callSearchAPI(searchKeyWord) {

    const requestParam = {
    apiKey: 'AIzaSyCbbDVhaJVCx_p2g3xUwD6seqhOGzM7lNg',
    q: '',
    part: 'snippet',
    maxResults: '25'
    
  }
    requestParam.q = searchKeyWord ? searchKeyWord : '';
    
    //`https://www.googleapis.com/youtube/v3/search?part=${requestParam.part}&maxResults=${requestParam.maxResults}&q=${requestParam.q}&key=${requestParam.apiKey}`
    fetch(`https://www.googleapis.com/youtube/v3/search?part=${requestParam.part}&maxResults=${requestParam.maxResults}&q=${requestParam.q}&key=${requestParam.apiKey}`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({ ...item, id: item.id.videoId}))) //객체 안에 들어있는 id 값을 대체해줌. spread operator
    .then(items => {
      setVideoData(items);
      setIsLoaded(true);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })

    setVideoClicked(false);
  }

  function callPopularSearchAPI() {
    const requestParam = {
    apiKey: 'AIzaSyCbbDVhaJVCx_p2g3xUwD6seqhOGzM7lNg',
    q: '',
    part: 'snippet',
    maxResults: '25',
    chart :'mostPopular'
    
    }
    
    //`https://www.googleapis.com/youtube/v3/videos?part=${requestParam.part}&chart=${requestParam.chart}&maxResults=${requestParam.maxResults}&key=${requestParam.apiKey}`
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=${requestParam.part}&chart=${requestParam.chart}&type=video&maxResults=${requestParam.maxResults}&key=${requestParam.apiKey}`, requestOptions)
      .then(response => response.json())  
    .then(result => {setVideoData(result.items); setIsLoaded(true);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })
    
  }

useEffect(() => {
  callPopularSearchAPI();
  
  },[])
  
  if (error) {
    return <div>Error : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading.....</div>
  } else {
    return (
      <div className={ styles.app}>
        <Header handleClick={callSearchAPI}/>
        <section className={styles.section}>
          <article className={styles.play__view , (videoClicked? styles.show__view: styles.hide__view)}>
            <Player videoUrl={videoUrl} videoDesc={videoDesc}/>
          </article>
          <article className={styles.list__view}>
            <Videos videos={videoData} handleClick = {handleVideoClick} videoClicked={videoClicked} />
          </article>
        </section>

      </div>
    );
  }
}

export default App;
