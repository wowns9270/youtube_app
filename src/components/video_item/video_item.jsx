import React from 'react';
import styles from './video_item.module.css'

const VideoItem = (props) => {



    return <li className={styles.container}>

        <div className={styles.video}>
            <img className={styles.thumbnail} src={props.item.snippet.thumbnails.medium.url} alt="video thumbnail" />

            <div className={styles.metadata}>
                <p className={styles.title}>{props.item.snippet.localized.title}</p>
                <p className={styles.channel}>{props.item.snippet.channelTitle}</p>
        </div>
        </div>


    </li>
};

export default VideoItem;