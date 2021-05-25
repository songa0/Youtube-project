import React from 'react';
import Video from './video';

const Videos = (props) => {
    const videoData = props.videos.items;
    
        return (
            <ul className={'video__list '+ (props.videoClicked?'set1column' : 'set2column')}>
                {
                    videoData.map(item => (
                        
                        <Video
                            key={item.id}
                            id={item.id}
                            imgSrc={item.snippet.thumbnails.default.url}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                            description={item.snippet.description}
                            handleClick={props.handleClick}
                        />
                        
                    )
                        
                    )
                }

            </ul>

        );

    };

export default Videos;