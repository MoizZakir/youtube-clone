import React from 'react'
import '../Styles/post.css'
import { useNavigate } from 'react-router-dom'
import useViews from '../../APIs calls/viewsApi'
import { useSelector } from 'react-redux'

const Post = ({id ,title ,url,data}) => {
    const navigate=useNavigate()
    const user=useSelector(state=>state.user)
    const uId=user?.currentUser || user?.ip
    console.log('viewsssss',data)
    
   
  return (

    <div className='post' onClick={async()=>{await useViews({id:uId},id)}} >
    <div className="post-img" onClick={()=>navigate(`/post/${id}`)}>
        <img src={url} alt="" />
    </div>
    <div className='post-body'><img src="https://yt3.ggpht.com/S1lSTMQUbqO9NmvaMUdqpw-QZL06jpKUUeeGeEnlFjk5-E4ESbKYHH7TExih2eFAwUpUAIIoQw=s68-c-k-c0x00ffffff-no-rj" alt="" />
   <div>
     <p>{title}</p>
     {/* <p>this is my first video i hope you guyz like please like subscribe and share it .......</p> */}
     <p style={{color:'gray'}}>{data?.desc}.  <span style={{paddingLeft:"10px"}}>{data?.veiws?.length }   views</span> </p>
    

   </div>
    </div>
    <div>
        
    </div>
        
    </div>
  )
}

export default Post