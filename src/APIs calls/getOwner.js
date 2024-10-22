import axios from "axios"

const useOwner=async(id)=>{
    try {
        const user= await axios.get(`https://youtube-backend-rho.vercel.app/api/user/${id}`)
        console.log(user)
        if(user?.data.status){
            return user?.data
        }
       return  user?.data
        
    } catch (error) {
        console.log('owner api error==> ',error)
    }

}
export default useOwner