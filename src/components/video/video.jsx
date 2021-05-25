import React, { memo } from 'react';
import styles from './video.module.css';

const Video = memo(props => {
    const {id, imgSrc, channel, description } = props;
    
    const title = ConvertSystemSourcetoHtml(props.title);
    
    function ConvertSystemSourcetoHtml(str){
        return str
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&#39;/g, "'");
    }

    const handleClick = () => {
        const videoInfo = {
            id,
            description
        }
        props.handleClick(videoInfo);
    }
    
    return (
        <li className={styles.video} onClick={handleClick}>
            <img className={styles.image} src={imgSrc} />
            <span>
                <span className={styles.title}>{title}</span>
                <span className={styles.channel}>{channel}</span>
            </span>
        </li>
    );
    
            
    
});

export default Video;