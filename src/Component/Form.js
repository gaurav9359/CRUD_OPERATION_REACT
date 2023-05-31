import React, { useState } from 'react'
import './form.css'

export default function Form({video_add}) {
    const [title, setTitle]= useState("")
    const [views, setViews]= useState("")

    function handleOnClick(){
        console.log("submitted");
        console.log(title)
        console.log(views)
        video_add(title, views)
        setTitle("")
        setViews("")
        
    }
    function handleOnchange(e){
        setTitle(e.target.value)
    }
    function handleonchange_views(e){
        setViews(e.target.value)
    }
  return (
    <div>
      <input type="text" onChange={handleOnchange} value={title} name='title' placeholder='Title'/>
      <input type="text" onChange={handleonchange_views} value={views} name='views' placeholder='views'/>
      <button onClick={handleOnClick}>ADD</button>
    </div>
  )
}
