import React from 'react';

const Video = props => {
    const { imgSrc, title, channel } = props;

    return (
        <li>
            <img src={imgSrc} />
            <span className='video_summary'>
                <span className='video__title'>{title}</span>
                <span className='video__channel'>{channel}</span>
            </span>
        </li>
    );
    
            
    
};

export default Video;