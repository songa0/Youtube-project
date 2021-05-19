import './App.css';

function App() {
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
          <ul className='video__list'>
            <li>
              <img src='/images/logo.png' />
              <span className='video_summary'>
                <span className='video__title'>BTS Plays 'This or That'</span>
                <span className='video__channel'>GQ</span>
              </span>
            </li>
          </ul>
        </article>
      </section>

    </>
  );
}

export default App;
