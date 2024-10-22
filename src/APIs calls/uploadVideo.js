import axios from "axios"
import { toast } from "react-toastify"
import Cookies from "universal-cookie"

const useUploadVideo=async(obj,load,setLoad)=>{
    const cookies=new Cookies()
    console.log('obj==> ',obj)
    
    try {
        const video=await axios.post('https://youtube-backend-rho.vercel.app/api/video/create',obj,{headers:{Authorization:'Bearers '+cookies.get('token')}})
        console.log(video)
        setLoad(true)
        if(video?.data.status){
            toast.success('video upload Succefully')
        }
        else{
            toast.error(video?.data?.message)

        }
        
        console.log('load==>',load)
        
    } catch (error) {
        console.log(error)
        console.log('load==>',load)
        setLoad(true)
        
    }


}
export default useUploadVideo