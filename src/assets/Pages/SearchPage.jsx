import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/search.css'
import VideoList from '../Components/VideoList'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const SearchPage = () => {
  const{id}=useParams()
  const{search}=useLocation()
  const [Video,setVideo]=useState()
  const query= new URLSearchParams(search)
  const key=query.get('keyword')
  console.log('==>',query.get('new'))

  useEffect(()=>{
    const api=async ()=>{
      try {
        const video=await axios.get(`http://localhost:8000/api/video?keyword=${key}`)
        console.log('video respose',video)
        if(video?.data?.data) {setVideo(video?.data?.data); console.log('new=======>',Video)}
        

        
      } catch (error) {
        
        console.log(error)
      }
      
    }
    api()

  },[])
  
  return (
    <div className='search'>
        <Navbar type='home'/>
        <div className="search-main-post">
         {Video?.map((e)=>(
           <VideoList type="search" data={e}/>

         ))}
        </div>
    </div>
  )
}

export default SearchPage