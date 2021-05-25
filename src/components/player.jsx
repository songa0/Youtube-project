import React, {memo} from 'react';
import ReactPlayer from 'react-player';

const Player = memo(props => {
    //const descRef = React.createRef();
    // descRef.innerHTML(props.videoDesc);
    console.log(props);

    return (
        <>
            <ReactPlayer url={`https://youtu.be/${props.videoUrl}`}  controls />
            <div className="video__desc">{props.videoDesc? props.videoDesc.split('\n').map(word => { return (<span>{word}<br/></span>)}):''}</div>
        </>
    );
} );

export default Player;