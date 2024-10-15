import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import '../Styles/video.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import VideoList from './VideoList'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import axios from 'axios'
import useAllVideo from '../../APIs calls/getAllVideoApi'
import { useDispatch, useSelector } from 'react-redux'
import { Follow, UnFollow } from '../../Redux/UserReducers'
import useFollow from '../../APIs calls/follow'
import { useDisLike, useLike } from '../../APIs calls/likeApi'

const Video = ({ data }) => {
    const { title, video: url, authId, likes, dislikes, desc } = data
    const [allVideo, setAllVideo] = useState([])
    const user=useSelector(state=>state?.user?.currentUser?._id);
    const user2=useSelector(state=>state?.user?.currentUser);
    const [owner, setOwner] = useState({})
    const [subscribe, setSubscribe] = useState(true)
    let width=window. innerWidth
    // console.log(';;;;;;',width)
    // const [length,setLength]=useState(user.following.length)
    const dispatch=useDispatch()

    //check subscriber
    useEffect(()=>{
        const check=user2?.following?.includes(authId)
        if(check){
            setSubscribe(!subscribe)
        }
        
    },[authId])

    //GET ALL VIDEOS DATA
    useEffect(() => {
        async function api() {
            const data = await useAllVideo()
            setAllVideo(data)
        }
        api()
    }, [])


    // GET USERS INFORMATION
    useEffect(() => {
        async function api() {
            const data = await axios.get(`https://youtube-backend-rho.vercel.app/api/user/${authId}`)
            console.log('===>res  ', data)

            if (data?.data?.status) return setOwner(data?.data?.data); console.log(owner)


        }
        api()

    }, [data])


    return (
        <div className='video'>
            
            <div className='main-video' >
                <ReactPlayer style={{ zIndex: 2 }} width="100%" height={width>=950?'450px':' 200px'} url={url}
                    controls={true} playing={true} />

                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='main-video-section1'>
                    <div style={{ display: 'flex', alignItems: 'center', width: '30rem' }}>
                        <img src="https://yt3.ggpht.com/S1lSTMQUbqO9NmvaMUdqpw-QZL06jpKUUeeGeEnlFjk5-E4ESbKYHH7TExih2eFAwUpUAIIoQw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                        <div className='main-video-section1-intro'>
                            <p>{owner?.name}</p>
                            <p>{owner?.follower?.length} subscriber</p>
                        </div>
                        <div className="subscribe-btn">
                            <button  disabled={!user2 || authId==user} style={{cursor:!user2 || authId==user?'not-allowed':'pointer'}} onClick={async()=>{await useFollow(user,authId,dispatch) ; setSubscribe(!subscribe)}}>{subscribe?'Subscribe':'Unsubscribe'}</button>
                            {/* dispatch(UnFollow('12')) */}
                        </div></div>
                    <div className='like-dislike'>
                        <div style={{ display: 'flex' }}> <span>{likes?.length}</span> <AiOutlineLike onClick={async()=>{!user2 || authId==user?'':await useLike(data?._id)}} style={{cursor:!user2 || authId==user?'not-allowed':'pointer'}} /></div>
                        <div style={{ display: 'flex' }} >  <span>{dislikes?.length}</span> <AiOutlineDislike onClick={async()=>{ !user2 || authId==user?"":await useDisLike(data?._id)}} style={{cursor:!user2 || authId==user?'not-allowed':'pointer'}} /></div>

                    </div>
                </div>


            </div>
            <div className='video-right'>
                {allVideo.map((e) => (

                    <VideoList type='video' data={e} />
                ))}


            </div>

        </div>
    )
}

export default Video