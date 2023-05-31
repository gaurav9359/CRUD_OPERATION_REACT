import './App.css';
import { useState } from 'react';
import Card from './Component/Card'
import videos from './data_section/data'
import Form from './Component/Form';

function App() {

  const [videoDbz, setVideoDbz]=useState(videos);

  function video_add(title,views2){
        setVideoDbz([...videoDbz,{channelName: title, views: views2, id: videoDbz.length+1}]);
        console.log(videoDbz)
        
  }

  function video_delete(id){
    setVideoDbz(videoDbz.filter(video=>video.id!==id));
  }


  return (
    <>
    <div className="form">
        <Form video_add={video_add}></Form>
      </div>

      <div className="container" style={{display: 'flex', maxWidth: "1000px"}}>
      {videoDbz.map((video)=>{
        return <Card key={video.id} video_delete={video_delete}  video={video} title={video.channelName} views={video.views}></Card>
      })}

      
      </div>
      
    </>
  );
}

export default App;
