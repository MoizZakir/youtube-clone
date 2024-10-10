import axios from "axios"
import Cookies from "universal-cookie"
import { registerFailure, registerStart, registerSuccess } from "../Redux/UserReducers"
import { toast } from "react-toastify"

const useLogin=async(obj,dispatch)=>{
    let cookies=new Cookies( )
    dispatch(registerStart())
    
    
    

    try {
        const user=await axios.post('http://localhost:8000/api/auth/login',obj)
        if (user?.data?.status){
            dispatch(registerSuccess(user?.data?.data))
             toast.success('Login successfully')
             cookies.set('token',user?.data?.token )
             
            }
            else{
                
            }
            
        } catch (error) {
        toast.error(error?.response?.data?.message)
        console.log('error===> ',error)
        dispatch(registerFailure())
        
    }
    
}
export default useLogin