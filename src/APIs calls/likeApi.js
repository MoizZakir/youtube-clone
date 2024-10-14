import axios from "axios"
import { toast } from "react-toastify"
import Cookies from "universal-cookie"

const cookies=new Cookies()

const useLike=async(id)=>{
    try {
        const like =await axios.put('http://localhost:8000/api/video/like',{id:id},{headers:{Authorization:'Bearers '+cookies.get('token')}})

        if(like?.data?.status){
            toast.success(like?.data?.message)
        }
        else{
            toast.error(like?.data?.message)
        }
        
        console.log('===>like==> ',like)
    } catch (error) {
        console.log(error)
    }
}
const useDisLike=async(id)=>{
    try {
        const dislike =await axios.put('http://localhost:8000/api/video/dislike',{id:id},{headers:{Authorization:'Bearers '+cookies.get('token')}})
        if(dislike?.data?.status){
            toast.success(dislike?.data?.message)
        }
        else{
            toast.error(dislike?.data?.message)
        }
        console.log('===>like==> ',dislike)
    } catch (error) {
        console.log(error)
    }
}
export{useLike,useDisLike}