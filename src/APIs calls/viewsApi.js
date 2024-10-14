import axios from "axios"

const useViews=async(obj,id)=>{
    try {
        const api=await axios.put(`https://youtube-backend-rho.vercel.app/api/video/${id}`,obj)
        if(api.data.status){
            alert(api.data.message)
        }
        else{
        alert(api.data.message)}
    } catch (error) {
        console.log(error)
    }


}
export default useViews