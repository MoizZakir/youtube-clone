import axios from "axios"
import Cookies from "universal-cookie"

const useUploadVideo=async(obj,load,setLoad)=>{
    const cookies=new Cookies()
    console.log('obj==> ',obj)
    
    try {
        const video=await axios.post('http://localhost:8000/api/video/create',obj,{headers:{Authorization:'Bearers '+cookies.get('token')}})
        console.log(video)
        setLoad(true)
        console.log('load==>',load)
        
    } catch (error) {
        console.log(error)
        console.log('load==>',load)
        setLoad(true)
        
    }


}
export default useUploadVideo