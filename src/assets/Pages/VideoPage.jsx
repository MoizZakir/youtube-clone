import React from 'react'
import Navbar from '../Components/Navbar'
import Video from '../Components/Video'
import { useParams } from 'react-router-dom'
import { multipleChoiceQuestions } from '../../dumydata'

const VideoPage = () => {
    const {id}=useParams()
    let data=multipleChoiceQuestions.find(e=> e.id==id)
    console.log(data)
    console.log(id)
  return (
    <div>
        <Navbar type='videopage'/>
        <Video tit={data.title} url={data.url}/>
    </div>
  )
}

export default VideoPage