import React from 'react'
import '../Styles/videolist.css'

const VideoList = ({type}) => {
  return (
    <div className='videolist'>
        <img style={{width:type=='video'?'130px':'50%',height:type=='video'?'17vh':'30vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOfbpKwLRP91JD52SV4ptdAUSqhcFcFYjDg&s" alt="" />
        <div>
            <p>Modern Console Tbale Design Ideas 2023| Sideboard designs ..
            </p>
            <p>Decor Dazzle</p>
            <p><span>4.4k views</span> <span>.10 month ago</span></p>

        </div>
       
    </div>
  )
}

export default VideoList