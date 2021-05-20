import React, { memo } from 'react';
import Video from './video';

const Videos = (props => { 


        return (
            <ul className='video__list'>
                {
                    props.video.map(item => (
                        <Video
                            key={item.id}
                            video={item.video}
                            handelClick={item.handelClick}
                        />
                        
                    )
                        
                    )
                }

            </ul>

        );

    });

export default Videos;