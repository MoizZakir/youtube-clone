import React from 'react'
import ReactPlayer from 'react-player'
import '../Styles/video.css'

const Video = ({tit,url}) => {
  return (
    <div className='video'>
        <div className='main-video' >
        <ReactPlayer  width="58%" height='70vh'  url={url}
 controls={true} playing={true}/>
 <h3>{tit}</h3>

</div>

</div>
  )
}

export default Video