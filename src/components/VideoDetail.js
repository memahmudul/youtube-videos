import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video){
        return <div>loading.......</div>
    }
    return (
       <div>
       <div className="ui embed">
       <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

       </div>
            <div className='ui segment'>
       <h4 className='ui header'>{video.snippet.title}</h4>
       <p>{video.snippet.description}</p>
        </div>
       </div>
    );
}
export default VideoDetail;