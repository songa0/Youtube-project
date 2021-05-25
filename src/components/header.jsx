import React, { memo } from 'react';

const Header = memo(props => {
    const inputRef = React.createRef();
    const handleClick = () => {
        const searchKeyWord = inputRef.current.value;
        searchKeyWord&& props.handleClick(searchKeyWord);
    };
    const handleKeyDown = (event) => {
        if (event.code == "Enter") {
            handleClick();
        }
    };
    return (
        <header className='youtube__header'>
            <img className='youtube__logo' src='/images/logo.png' alt="logo" />
            <span className='youtube__title'>Youtube</span>
            <input ref={inputRef} type='text' className='youtube__search__text' placeholder='Search..' onKeyDown={handleKeyDown}/>
            <button className='youtube__search__btn' onClick={handleClick}><img src='/images/search.png'/></button>
        </header>
    );
});

export default Header;