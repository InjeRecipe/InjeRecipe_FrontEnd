import axios from 'axios'
export const chatGptService =() =>{
    
    const path = 'http://localhost:8080'
    const GET_RECIPE = async (data:object) =>{
        const message = {prompt:'너를 소개해봐'}
        const server = `${path}/openai/chat`
        
        try{ 
            
            await axios.get(server,{
                params:message
            }).then((res)=>{
                
                console.log('GET_Message_RESPON',res.data,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                }
            )
        }
        catch(error){
            console.log(error)
        }
    }
    return{
        GET_RECIPE
    }
}