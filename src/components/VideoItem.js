import React from 'react';
import style from './videoitem.module.css'

export default function VideoItem(props) {
  return <div onClick={()=>{props.onVideoSelect(props.video)}} className={`item ${style.videoItem}`}>
  <img src={props.video.snippet.thumbnails.medium.url} alt="" className='ui image' />
  <div className='content'>
      <div className="header">
      {props.video.snippet.title}
      </div>
      <div className="description">
      {props.video.snippet.description}
      </div>
  </div>
</div>
}
