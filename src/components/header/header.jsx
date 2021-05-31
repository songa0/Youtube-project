import React, { memo, useRef } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
  const inputRef = useRef();
  const handleClick = () => {
    const searchKeyWord = inputRef.current.value;
    searchKeyWord && props.handleClick(searchKeyWord);
  };
  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleClick();
    }
  };
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logoImg" />
      <span className={styles.title}>Youtube</span>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search.."
        onKeyDown={handleKeyDown}
      />
      <button className={styles.button} onClick={handleClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="btnImg"
        />
      </button>
    </header>
  );
});

export default Header;
