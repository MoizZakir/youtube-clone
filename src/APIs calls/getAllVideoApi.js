import axios from "axios"

async function useAllVideo(){

    try {
        
        const api=await axios.get('https://youtube-backend-rho.vercel.app/api/video/all')
        //{headers:{Authorization:'Bearers '+cookies.get('token')}}
        console.log('alll   ==> ',api)
        if(!api?.data?.status){
          return  console.log('something wrong')
         
        }
        return api?.data?.data
    } catch (error) {
        
        console.log(error)
    }

    
    
    
    }

    export default useAllVideo

