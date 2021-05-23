import React from 'react';
import Video from './video';

const Videos = (props) => {
    const videoData = props.videos.items
        return (
            <ul className='video__list'>
                {
                    videoData.map(item => (
                        
                        <Video
                            key={item.id.videoId}
                            id={item.id.videoId}
                            imgSrc={item.snippet.thumbnails.default.url}
                            title={ item.snippet.title}
                            channel={ item.snippet.channelTitle}
                        />
                        
                    )
                        
                    )
                }

            </ul>

        );

    };

export default Videos;