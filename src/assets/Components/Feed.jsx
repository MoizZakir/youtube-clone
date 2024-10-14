import React from 'react'
import '../Styles/feed.css'
import Post from './Post'
import { multipleChoiceQuestions } from '../../dumydata'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import useAllVideo from '../../APIs calls/getAllVideoApi'

const Feed = ({data:video}) => {

  
  

  
  
 

  return (
    <div className='feed'>
        
        {
          video?.map(e=>(
             <Post  id={e._id} title={e?.title} url={e?.thumbnail} data={e}/>
          ))

        }
        
    </div>
  )
}

export default Feed