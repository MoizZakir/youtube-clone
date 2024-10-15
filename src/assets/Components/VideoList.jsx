import React, { useEffect, useState } from 'react'
import '../Styles/videolist.css'
import axios from 'axios'
import { format } from 'timeago.js'
import { useNavigate } from 'react-router-dom'
import useOwner from '../../APIs calls/getOwner'
const VideoList = ({ type, data }) => {
  const [owner, setOwner] = useState({})
  const navigate = useNavigate()
  const width=window.innerWidth

  useEffect(() => {
    async function api() {
      const data1 = await useOwner(data?.authId)
      if (data1?.status) return await setOwner(data1?.data); console.log('owner===>', owner)
    }
    api()

  }, [data])
  console.log('mine=====', owner)

  return (
    <div className='videolist' onClick={() => { navigate(`/post/${data?._id}`) }}>
      <img style={{ width: type == 'video' && width>800 ?  '50%':  type == 'video' && width<800?'95%' : '50%', height: type == 'video'  && width>800  ? '120px' :  type == 'video' && width<800?'200px' : '30vh' }} src={data?.thumbnail} alt="" />
      <div>
        <p>
          {data?.title}            </p>
        <p>{owner?.name}</p>
        <p><span>{data?.veiws?.length} views</span> <span>{format(data.createdAt)}</span></p>

      </div>

    </div>
  )
}

export default VideoList