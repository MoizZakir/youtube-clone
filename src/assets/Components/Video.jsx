import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import '../Styles/video.css'
import VideoList from './VideoList'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import axios from 'axios'
import useAllVideo from '../../APIs calls/getAllVideoApi'

const Video = ({ data }) => {
    const {title,video:url,authId,likes,dislikes,desc}=data
    // console.log('auth===>',authId)
    const [allVideo,setAllVideo]=useState([])
    
    const [owner,setOwner]=useState({})

    useEffect(()=>{
        async function api(){
            const data=await useAllVideo()
            setAllVideo(data)
        }
        api()
    },[])

    useEffect(()=>{
       async function api(){
            const data= await axios.get(`http://localhost:8000/api/user/${authId}`)
            console.log('===>res  ',data)
            
            if(data?.data?.status) return setOwner(data?.data?.data); console.log(owner)
        
            
        }
        api()

    },[data])
    
    return (
        <div className='video'>
            <div className='main-video' >
                <ReactPlayer style={{ zIndex: 2 }} width="100%" height="30%"   url={url}
                    controls={true} playing={true} />

                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='main-video-section1'>
                  <div style={{display:'flex',alignItems:'center',width:'30rem'}}> 
                    <img src="https://yt3.ggpht.com/S1lSTMQUbqO9NmvaMUdqpw-QZL06jpKUUeeGeEnlFjk5-E4ESbKYHH7TExih2eFAwUpUAIIoQw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className='main-video-section1-intro'>
                        <p>{owner?.name}</p>
                        <p>{owner?.follower?.length} subscriber</p>
                    </div>
                    <div className="subscribe-btn">
            <button>Subscribe</button>
        </div></div>
        <div className='like-dislike'>
       <div style={{display:'flex'}}> <span>{likes?.length}</span> <AiOutlineLike /></div>
       <div style={{display:'flex'}} >  <span>{dislikes?.length}</span> <AiOutlineDislike /></div>
       
        </div>
                </div>


            </div>
            <div className='video-right'>
            {allVideo.map((e)=>(

                <VideoList type='video' data={e}/>
            ))}
             

            </div>

        </div>
    )
}

export default Video