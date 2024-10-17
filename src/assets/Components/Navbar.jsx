import React, { useEffect, useRef, useState } from 'react'
import '../Styles/navbar.css'
import { FaArrowLeft, FaRegUserCircle, FaYoutube } from "react-icons/fa"
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { brown } from '@mui/material/colors';

const Navbar = ({type}) => {
  const [searchOpen,setSearchOpen]=useState(false);
  const [sidebaropen,setSidebarOpen]=useState(false);
  const user=useSelector(state=>state.user.currentUser)
  console.log('===> ,',user)
  const search=useRef()
  const navigate=useNavigate()
  console.log(search.current)
  const width=window. innerWidth
  console.log('width===>  ',width)

const searchHanlder=()=>{
  console.log('moiz')
  navigate(`/search?keyword=${search.current}`)

}



  useEffect(()=>{
    if(width<786){
      setSidebarOpen(()=>!sidebaropen)
    }
  },[width])
  useEffect(()=>{
    if(type=='videopage'){
      setSidebarOpen(()=>!sidebaropen)
    }
  },[type])
  return (
    <div className='navbar'>
              

       <div style={{display:searchOpen && 'none'}} className="logo" > <div className='logoimg'> <LuMenu className='menuebar' size={20} onClick={()=>setSidebarOpen(!sidebaropen)} /><FaYoutube size={30} color='red' /> <span>YouTube</span><sup>pk</sup></div>
 
{!sidebaropen &&( <Sidebar className='sidebar'/>)}

    
        </div>
      

       {width<=550 &&(
        <div style={{width:searchOpen?'10%':'25%', justifyContent:searchOpen?'flex-start':'flex-end'}} className='searchbtn'>
        <button onClick={()=>setSearchOpen(!searchOpen)}>
          {searchOpen?<FaArrowLeft />:<CiSearch />}</button>

        </div>)}
        {
         (width>550 || searchOpen)  &&(
            <div style={{width: searchOpen ?"90%":'45%'}} className="serachbar">
            <input onChange={(e)=>{search.current=e.target.value}} type="search" placeholder='Searchs' />
            <button onClick={()=>{searchHanlder()}}><CiSearch /></button>
    
           </div>
          )
        }

      
       <div style={{display:searchOpen && 'none'}} className="signupbtn">
       {/* <button className='dotbtn'><BsThreeDotsVertical  /></button> */}
       {user?(<p style={{ marginRight:'5px',padding:"5px", borderRadius:"50%", height:"25px",width:'25px',textAlign:'center', backgroundColor:"brown",color:"white"}}>{user?.name[0]}</p>):(<button className='dotbtn'><FaRegUserCircle /> Sign in</button>)}
       
       </div>

    </div>
  )
}

export default Navbar