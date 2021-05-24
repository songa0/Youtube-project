import React, {memo} from 'react';
import ReactPlayer from 'react-player';

const Player = memo(props => {
    return (
        <>
            <ReactPlayer url={`https://youtu.be/${props.videoUrl}`}  controls />
            {/* <desc>{props.desc}</desc> */}
        </>
    );
} );

export default Player;