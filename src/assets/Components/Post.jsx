import React from 'react'
import '../Styles/post.css'
import { useNavigate } from 'react-router-dom'

const Post = ({id ,title ,url}) => {
    const navigate=useNavigate()
   
  return (

    <div className='post'>
    <div className="post-img" onClick={()=>navigate(`/post/${id}`)}>
        <img src="https://i.ytimg.com/vi/G1lGDTWdKkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFyVu85oai6gTO0S07uvs2U-MUfw" alt="" />
    </div>
    <div className='post-body'><img src="https://yt3.ggpht.com/S1lSTMQUbqO9NmvaMUdqpw-QZL06jpKUUeeGeEnlFjk5-E4ESbKYHH7TExih2eFAwUpUAIIoQw=s68-c-k-c0x00ffffff-no-rj" alt="" />
   <div>
     <p>{title}</p>
     {/* <p>this is my first video i hope you guyz like please like subscribe and share it .......</p> */}
     <p style={{color:'gray'}}>this is my first video i hope </p>

   </div>
    </div>
    <div>
        
    </div>
        
    </div>
  )
}

export default Post