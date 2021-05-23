import { useEffect, useState } from 'react';
import './App.css';
import Videos from './components/videos';
import Header from './components/header';

function App() {

  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    } 
  };

  const requestParam = {
    apiKey: 'AIzaSyCbbDVhaJVCx_p2g3xUwD6seqhOGzM7lNg',
    q: '',
    part: 'snippet',
    maxResults : '25'
    
  }
  function callSearchAPI(searchKeyWord) {
    requestParam.q = searchKeyWord ? searchKeyWord : '';
    console.log('searchKeyWord ***', searchKeyWord);
    //`https://www.googleapis.com/youtube/v3/search?part=${requestParam.part}&maxResults=${requestParam.maxResults}&q=${requestParam.q}&key=${requestParam.apiKey}`
    fetch(`https://www.googleapis.com/youtube/v3/search?part=${requestParam.part}&maxResults=${requestParam.maxResults}&q=${requestParam.q}&key=${requestParam.apiKey}`, requestOptions)
    .then(response => {
      return response.text();
    })
    .then((result) => {
      setVideoData(JSON.parse(result));
      setIsLoaded(true);
    }, (error) => {
      setIsLoaded(true);
      setError(error);
    })
  }
useEffect(() => {
  callSearchAPI();
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
          <article className='video__play__view'></article>
          <article className='video__list__view'>
            <Videos videos={videoData} />
          </article>
        </section>

      </>
    );
  }
}

export default App;
