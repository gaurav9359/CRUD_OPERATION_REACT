import React from 'react'

export default function Card({title,views,video, video_delete}) {

  function handleOnclick(){
    console.log(video.id)
  }

  function deleteVideo(){
    video_delete(video.id)
  }

  return (
   <>
   
     
  <div className="container" style={{width: "200px" ,margin: "30px" }}>
  <button onClick={deleteVideo}>x</button>
  <img style={{margin: "20px"}} src="https://picsum.photos/id/1/200/200" className="card-img-top" alt="..."/>
  <p>{title}</p>
  <div className="btn" style={{display: 'flex'}}>
  <p>{views}</p>
  <button style={{boxSizing: "bordder-box"}} onClick={handleOnclick}>oreno button</button>
  </div>
  
  </div>
  
   </>
  )
}
