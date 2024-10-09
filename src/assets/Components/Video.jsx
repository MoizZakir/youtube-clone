import React from 'react'
import ReactPlayer from 'react-player'
import '../Styles/video.css'
import VideoList from './VideoList'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

const Video = ({ tit, url }) => {
    return (
        <div className='video'>
            <div className='main-video' >
                <ReactPlayer style={{ zIndex: 2 }} width="100%" height="30%"   url={url}
                    controls={true} playing={true} />

                <h3>{tit}</h3>
                <div className='main-video-section1'>
                  <div style={{display:'flex',alignItems:'center',width:'30rem'}}> 
                    <img src="https://yt3.ggpht.com/S1lSTMQUbqO9NmvaMUdqpw-QZL06jpKUUeeGeEnlFjk5-E4ESbKYHH7TExih2eFAwUpUAIIoQw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className='main-video-section1-intro'>
                        <p>Moiz Zakir</p>
                        <p>6.51k subscriber</p>
                    </div>
                    <div className="subscribe-btn">
            <button>Subscribe</button>
        </div></div>
        <div className='like-dislike'>
        <AiOutlineLike />
        <AiOutlineDislike />
        </div>
                </div>


            </div>
            <div className='video-right'>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                <VideoList type='video'/>
                
                <VideoList type='video'/>

            </div>

        </div>
    )
}

export default Video