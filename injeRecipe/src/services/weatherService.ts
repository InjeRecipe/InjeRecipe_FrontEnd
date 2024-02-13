import axios from 'axios'
export const weatherService =() =>{
    
    const path = 'http://localhost:8080'
    type props ={
        lat:string,
        lon:string
    }
    const POST_WEATHER = async (data:props) =>{
        
        const server = `${path}/weather/get`
        console.log(server)
        console.log(data)
        try{ 
            await axios.post(server,data).then((res)=>{
                console.log(res.data)
            })
            
        }
        catch(error){
            console.log('???')
        }
    }
    return{
        POST_WEATHER
    }
}