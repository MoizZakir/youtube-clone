import axios from "axios"
import Cookies from "universal-cookie"
import { registerFailure, registerStart, registerSuccess } from "../Redux/UserReducers"

const useLogin=async(obj,dispatch)=>{
    let cookies=new Cookies( )
    dispatch(registerStart())
    
    
    

    try {
        const user=await axios.post('http://localhost:8000/api/auth/login',obj)
        if (user?.data?.status){
            dispatch(registerSuccess(user?.data?.token))
             alert('user register successfully')
             cookies.set('token',user?.data?.token )
             
         }
        
    } catch (error) {
        console.log('error===> ',error)
        dispatch(registerFailure())
        
    }
    
}
export default useLogin