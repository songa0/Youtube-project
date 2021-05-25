import React ,{ useEffect, useState } from 'react';
import './App.css';
import Videos from './components/videos';
import Header from './components/header';
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
    .then(response => {
      return response.json();
    })
    .then((result) => {
      setVideoData(result.items);
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
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=${requestParam.part}&chart=${requestParam.chart}&maxResults=${requestParam.maxResults}&key=${requestParam.apiKey}`, requestOptions)
    .then(response => {
      return response.json();
    })
    .then((result) => {
      setVideoData(result.items);
      setIsLoaded(true);
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
      <>
        <Header handleClick={callSearchAPI}/>
        <section className='youtube__section'>
          <article className={'video__play__view ' + (videoClicked? 'show':'hide')}>
            <Player videoUrl={videoUrl} videoDesc={videoDesc}/>
          </article>
          <article className='video__list__view'>
            <Videos videos={videoData} handleClick = {handleVideoClick} videoClicked={videoClicked} />
          </article>
        </section>

      </>
    );
  }
}

export default App;
