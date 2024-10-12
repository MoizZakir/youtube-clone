import React from 'react'
import '../Styles/feed.css'
import Post from './Post'
import { multipleChoiceQuestions } from '../../dumydata'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Feed = ({data:video}) => {

  // let data=multipleChoiceQuestions
  console.log('video==>', video)
  // console.log(data)

  return (
    <div className='feed'>
        
        {/* <Post thumb="https://i.ytimg.com/vi/G1lGDTWdKkI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFyVu85oai6gTO0S07uvs2U-MUfw" title='my first youtube video' url='https://firebasestorage.googleapis.com/v0/b/myfirsttest-1868f.appspot.com/o/1706632040957-2023-11-01%2000-42-38.mp4?alt=media&token=9a707fc3-6a4e-4c62-bd82-7d457510601d' /> */}
        {
          video?.map(e=>(
             <Post  id={e._id} title={e?.title} url={e?.thumbnail} data={e}/>
          ))

        }
        
    </div>
  )
}

export default Feed