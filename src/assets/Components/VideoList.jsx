import React, { useEffect, useState } from 'react'
import '../Styles/videolist.css'
import axios from 'axios'
import {format} from 'timeago.js'
import { useNavigate } from 'react-router-dom'
const VideoList = ({type,data}) => {
  const[owner,setOwner]=useState({})
  const navigate=useNavigate()
 
  // const {authId}=data
  // console.log('data===> ',data)
  useEffect(()=>{
    async function api(){
         const data1= await axios.get(`http://localhost:8000/api/user/${data?.authId}`)
         console.log('===>res user ====> ',data1)
         
         if(data1?.data?.status) return await setOwner(data1?.data?.data); console.log('owner===>',owner)
     
         
     }
     api()

 },[data])
 console.log('mine=====',owner)

  return (
    <div className='videolist' onClick={()=>{navigate(`/post/${data?._id}`)}}>
        <img style={{width:type=='video'?'130px':'50%',height:type=='video'?'17vh':'30vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOfbpKwLRP91JD52SV4ptdAUSqhcFcFYjDg&s" alt="" />
        <div>
            <p>
{data?.title}            </p>
            <p>{owner?.name}</p>
            <p><span>{data?.veiws?.length} views</span> <span>{format(data.createdAt)}</span></p>

        </div>
       
    </div>
  )
}

export default VideoList