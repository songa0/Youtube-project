import React,{ memo } from 'react';

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
        <li onClick={handleClick}>
            <img src={imgSrc} />
            <span className='video_summary'>
                <span className='video__title'>{title}</span>
                <span className='video__channel'>{channel}</span>
            </span>
        </li>
    );
    
            
    
});

export default Video;