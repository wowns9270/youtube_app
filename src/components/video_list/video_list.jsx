import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => {

    
    return <ul>

        {
            props.videos.map( video => {
                return <VideoItem item={video} key={video.id}/>
            })
        }

    </ul>
    

}

export default VideoList;