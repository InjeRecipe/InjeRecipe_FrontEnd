import axios from 'axios'
export const weatherService =() =>{
    
    const path = 'http://localhost:8080'
    const POST_WEATHER = async (data:object) =>{
        
        const server = `${path}/weather/get`
        console.log(data)
        try{ 
            const respon = await axios.post(server,data)
            console.log(respon.data)
        }
        catch(error){
            console.log('???')
        }
    }
    return{
        POST_WEATHER
    }
}