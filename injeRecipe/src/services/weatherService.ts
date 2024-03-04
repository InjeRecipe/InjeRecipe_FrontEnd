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
            const res =await axios.post(server,data)
                const responseData = JSON.parse(res.data.data);
                console.log('responseData',responseData)
                 return responseData
                
        }
        
        catch(error){
            console.log('???qqqq')
        }
    }
    return{
        POST_WEATHER
    }
}