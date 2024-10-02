import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/search.css'
import VideoList from '../Components/VideoList'

const SearchPage = () => {
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