import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../Styles/home.css'
import Post from '../Components/Post'
import Feed from '../Components/Feed'
import axios from 'axios'
import Cookies from 'universal-cookie'


const Home = () => {
  const cookies = new Cookies();
  console.log('tokenchekc==>  ',cookies.get('token'))
  useEffect(()=>{
   async function moiz(){
    const api=await axios.get('http://localhost:8000/api/home',{headers:{Authorization:'Bearers '+cookies.get('token')}})
    console.log(api)
    }
    moiz()
  },[])
  return (
    <div className='Home'>
        <Navbar type='homepage'/>
      <Feed/>
       
    </div>
  )
}

export default Home