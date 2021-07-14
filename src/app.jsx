import React, { useEffect, useState} from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {

  const [videos , setVideos] = useState([]);



//useEffect 는 mount 될때마다
//두번째 인자가 [] 이면 처음 한번
//[videos]를 통해 state별로 가능 

  useEffect(() =>{

  
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyA3FWE39w5qseEaasvmLMnn3bcObms43pA&part=snippet&chart=mostPopular&maxResults=10", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  } ,[]);

  return <>
      
      {
      <VideoList videos={videos}/>
      }
    </>
    
}
export default App
