import React, { useEffect, useState } from 'react'
import '../Styles/videolist.css'
import axios from 'axios'
import {format} from 'timeago.js'
const VideoList = ({type,data}) => {
  const[owner,setOwner]=useState()
 
  // const {authId}=data
  // console.log('data===> ',data)
  useEffect(()=>{
    async function api(){
         const data= await axios.get(`http://localhost:8000/api/user/${data?.authId}`)
         console.log('===>res  ',data)
         
         if(data?.data?.status) return setOwner(data?.data?.data); console.log(owner)
     
         
     }
     api()

 },[data])

  return (
    <div className='videolist'>
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