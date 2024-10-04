import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/search.css'
import VideoList from '../Components/VideoList'
import { useLocation, useParams } from 'react-router-dom'

const SearchPage = () => {
  const{id}=useParams()
  const{search}=useLocation()
  const query= new URLSearchParams(search)
  console.log('==>',query.get('id'))
  console.log('==>',query.get('new'))
  
  return (
    <div className='search'>
        <Navbar type='home'/>
        <div className="search-main-post">
          <VideoList/>
          <VideoList/>
          <VideoList/>
          <VideoList/>
          <VideoList/>
          <VideoList/>
          <VideoList/>
        </div>
    </div>
  )
}

export default SearchPage