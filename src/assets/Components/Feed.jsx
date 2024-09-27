import React from 'react'
import '../Styles/feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed'>
        <Post videoSrc="https://youtu.be/FSyitrG-btc?si=nhD3PFz0BWA0R0sO" thumbnailSrc='https://i.ytimg.com/vi/G1lGDTWdKkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFyVu85oai6gTO0S07uvs2U-MUfw'/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed