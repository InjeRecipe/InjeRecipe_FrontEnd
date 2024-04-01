import axios from "axios"

export const signService = () => {
    const path = 'http://localhost:8080'
    type post = {
        account:string,
        password:string,
        nickname:string,
        age:number,
       
    role: string,
    socialType: string,
    socialId: string,
    imageUrl: string
    }
    const POST_SIGNUP = async(data:post) => {
        const serverPath = `${path}/member/signUp`
        try{
            const res = await axios.post(serverPath,data)
            console.log(res.data,'02020200202020020202020200')
            return res
        }catch(error){
             console.log(error)
        }
    }
    const POST_SIGNIN = async({id,pw}:any) =>{
        console.log('@@@@@@@!!!!',id,pw)
        try{
            const serverPath = `${path}/member/sign-in`
            const res = await axios.post(serverPath,{
                account:id,
                password:pw
            })
            console.log(res.data)
            return res.data.data
            
        }
        catch(error){
            console.log(error)
        }
    }
    return{
        POST_SIGNUP,
        POST_SIGNIN
    }
}