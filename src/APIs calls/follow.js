import axios from "axios"
import { Follow, UnFollow } from "../Redux/UserReducers"
import Cookies from "universal-cookie"

const useFollow=async(id,fId,dispatch)=>{
    const cookies=new Cookies()
    
    console.log('=========sasxdcs=====',id,'cdscjdsncd',fId)
    try{
        const checkUser=await axios.get(`http://localhost:8000/api/user/${id}`)
        if(checkUser?.data?.status){
            if(!checkUser?.data?.data?.following?.includes(fId)){
                await axios.put(`http://localhost:8000/api/user/follow/`,{id:fId},{headers:{Authorization:'Bearers '+cookies.get('token')}})
                dispatch(Follow(fId))
            }
            
            else{
                await axios.put(`http://localhost:8000/api/user/unfollow/`,{id:fId},{headers:{Authorization:'Bearers '+cookies.get('token')}})
                dispatch(UnFollow(fId))

            }
        }
    }
    catch(error){
        console.log(error)
    }
}
export default useFollow