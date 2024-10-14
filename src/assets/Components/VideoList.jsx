import React, { useEffect, useState } from 'react'
import '../Styles/videolist.css'
import axios from 'axios'
import { format } from 'timeago.js'
import { useNavigate } from 'react-router-dom'
import useOwner from '../../APIs calls/getOwner'
const VideoList = ({ type, data }) => {
  const [owner, setOwner] = useState({})
  const navigate = useNavigate()

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
      <img style={{ width: type == 'video' ? '130px' : '50%', height: type == 'video' ? '17vh' : '30vh' }} src={data?.thumbnail} alt="" />
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