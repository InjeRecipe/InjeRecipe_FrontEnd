import axios from "axios"

export const signService = () => {
    const path = 'http://localhost:8080'
    const POST_SIGNUP = async(data:any) => {
        const serverPath = `${path}/signUp`
        try{
            const res = await axios.post(serverPath,data)
            console.log(res.data,'02020200202020020202020200')
            return res
        }catch(error){
             console.log(error)
        }
    }

    const OAUTH_SIGNUP = async() => {
        const serverPath = `${path}/oauth/signUp`
        const data = {
            account:'',
            name:'',
            email:'',
            socalType:'',
            imageUrl:'',
        }
        try{
            const res = await axios.post(serverPath,data)
            console.log(res.data,'02020200202020020202020200')
            return res
        }catch(error){
            // console.log(error)
        }
    }
    return{
        POST_SIGNUP
    }
}