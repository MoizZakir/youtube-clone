import axios from "axios"
import Cookies from "universal-cookie"

const useUploadVideo=async(obj)=>{
    const cookies=new Cookies()
    console.log('obj==> ',obj)
    
    try {
        const video=await axios.post('http://localhost:8000/api/video/create',obj,{headers:{Authorization:'Bearers '+cookies.get('token')}})
        console.log(video)
        
    } catch (error) {
        console.log(error)
        
    }


}
export default useUploadVideo