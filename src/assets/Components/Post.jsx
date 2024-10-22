import React, { useEffect, useState } from 'react'
import '../Styles/post.css'
import { useNavigate } from 'react-router-dom'
import useViews from '../../APIs calls/viewsApi'
import { useSelector } from 'react-redux'
import useOwner from '../../APIs calls/getOwner'

const Post = ({id ,title ,url,data}) => {
    const navigate=useNavigate()
    const user=useSelector(state=>state.user)
    const uId=user?.currentUser || user?.ip
    const [owner,setOwner]=useState({})
    
    async function api() {
      const data1=await useOwner(data?.authId)
     
      setOwner( data1?.data)
      console.log(data1)
      
    }
    useEffect(()=>{api()},[])


    
   
  return (

    <div className='post' onClick={async()=>{await useViews({id:uId},id)}} >
    <div className="post-img" onClick={()=>navigate(`/post/${id}`)}>
        <img src={url} alt="" />
    </div>
    <div className='post-body'><span style={{width:"25px", borderRadius:'50%',textAlign:'center', color:'white',height:'25px', display:"flex" ,alignItems:'center',justifyContent:'center' ,backgroundColor:'gray'}}>{owner?.name?.slice(0,1)}</span>
   <div>
     <p>{title}</p>
     {/* <p>this is my first video i hope you guyz like please like subscribe and share it .......</p> */}
     <p style={{color:'gray'}}>{data?.desc}.  <span style={{paddingLeft:"10px"}}>{data?.veiws?.length }   views</span> </p>
     <p style={{color:'gray'}}> </p>
    

   </div>
    </div>
    <div>
        
    </div>
        
    </div>
  )
}

export default Post