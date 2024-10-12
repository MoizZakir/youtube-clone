import React, { useEffect, useRef, useState } from 'react';
import '../Styles/create.css'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto, thumbnail } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import Post from '../Components/Post';
import useUploadVideo from '../../APIs calls/uploadVideo';

const Create = () => {
  const [load,setLoad]=useState(true)
  let title=useRef()
  let desc=useRef()
  let video=useRef()
  let img=useRef()
  let keywords=useRef()
  let videoUrl=useRef()
  let imgUrl=useRef()
  
 
 
  
  

  

  const handleSubmit = async (e) => {

    if(!title ||!desc ||!video ||!img ||!keywords) return alert('Please complete All detail')
    async function fileSender(type){
    const data=new FormData()
    console.log('moiz')
    if(type=='image'){

      data.append('file',img.current)
    }
    else{
      data.append('file',video.current)

    }
    data.append('upload_preset','myCloud')
    data.append('cloud_name`','dszfpdae2')
    
    try {
      setLoad(false)
      console.log('load==>',load)
      if(!img.current && !video.current  ) return alert('please add data')
        
      const res=await fetch(`https://api.cloudinary.com/v1_1/dszfpdae2/${type}/upload`,{method:"POST",body:data})
      
      const cloudData=await res.json()
      console.log(cloudData?.url)
      if(type=="video"){
        videoUrl.current=cloudData?.url
        if(cloudData?.url){
         
          
        }
      }
      else{
        imgUrl.current=cloudData.url
        
      }

   
   
   
    } catch (error) {
      
    }}
    await fileSender('video')
    await fileSender('image')
    const obj={
      title:title.current,
      thumbnail:imgUrl.current
      ,video:videoUrl.current,
      keywords:keywords.current.split(','),
      desc:desc.current
    }

    await useUploadVideo(obj,load,setLoad)

    
 
  };

  return (
    <div className="upload-form" >
      <h2>Upload a New Video</h2>
      <p>Fill out the form to add a new video to your library.</p>
      
      <div className="form-group">
        <label htmlFor="title">Video Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e)=>title.current=e.target.value}
          
          placeholder="Enter a title for your video"
          
          />
      </div>
      
      <div className="form-group">
        <label htmlFor="keywords">Keywords</label>
        <input
          onChange={(e)=>keywords.current=e.target.value}
          
          type="text"
          id="keywords"
          name="keywords"
          
          placeholder="Enter keywords separated by commas"
          
          />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={(e)=>desc.current=e.target.value}
          id="description"
          name="description"
      
          placeholder="Provide a description for your video"
          
        />
      </div>

      <div className="form-group file-input">
        <label htmlFor="thumbnail">Thumbnail</label>
        <input
          type="file"
          
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={(e)=>img.current=e.target.files[0]}
          
          />
      </div>

      <div className="form-group file-input">
        <label htmlFor="video">Video File</label>
        <input
          onChange={(e)=>video.current=e.target.files[0]}
          type="file"
          id="video"
          name="video"
          accept="video/*"
         
        />
      </div>

      <button disabled={!load} onClick={()=>handleSubmit()}>{load?'Upload Video ':'wait....'}</button>
    </div>
  );
};

export default Create;
