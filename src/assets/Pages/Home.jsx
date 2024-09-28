import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../Styles/home.css'
import Post from '../Components/Post'
import Feed from '../Components/Feed'


const Home = () => {
  return (
    <div className='Home'>
        <Navbar type='homepage'/>
      <Feed/>
       
    </div>
  )
}

export default Home