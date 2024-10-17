import axios from "axios"
import Cookies from 'universal-cookie';
import { registerFailure, registerStart, registerSuccess } from "../Redux/UserReducers";
import { toast } from "react-toastify";

const useSignup=async(obj,dispatch)=>{
    
    console.log('chal gaya..')
    const cookies = new Cookies();
    console.log(" ==> ",obj)
    dispatch(registerStart())
    try {
        const user= await axios.post('http://localhost:8000/api/auth/signup',obj)

        if (user?.data?.status){
           dispatch(registerSuccess(user?.data?.data))
           toast.success('Register successfully')
           cookies.set('token',user?.data?.token )
           
        }
        
    }catch (error) {
        console.log('error===> ',error)
        toast.error(error)
        dispatch(registerFailure())
        
    }


}
export default useSignup