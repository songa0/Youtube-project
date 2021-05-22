import './App.css';
import Videos from './components/videos';

function App() {

  var requestOptions = {
  // method: 'GET',
  //   redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
         'Accept': 'application/json'
    }
  };
  
  let responseData;
  fetch('data/data.json',requestOptions)
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(result => {
      console.log("EEEEEEEEEEEE",result);
      const resultData = result;
      responseData = resultData.items.map(row => {
        return {
          title: row.snippet.title,
          channelTitle: row.snippet.channelTitlem,
          imgSrc: row.snippet.thumbnails.default.url
        }
      });
    })
  .catch(error => console.log('error', error));

  return (
    <>
      <header className='youtube__header'>
        <img className='youtube__logo' src='/images/logo.png' alt="logo" />
        <span className='youtube__title'>Youtube</span>
        <input type='text' className='youtube__search__text' placeholder='Search..'/>
        <button className='youtube__search__btn'><img src='/images/search.png'/></button>
      </header>
      <section className='youtube__section'>
        <article className='video__play__view'></article>
        <article className='video__list__view'>
          <Videos videos={responseData}/>
          
        </article>
      </section>

    </>
  );
}

export default App;
