import axios from 'axios'
export const chatGptService =() =>{
    
    const path = 'http://localhost:8080'
    const GET_RECIPE_WEHATER = async (data:any) =>{
        const message = {prompt:''}
        if(data == 'Clouds'){
           message.prompt = '날씨가 흐린데 메뉴를 추천해줘 답은 5개정도를 json객체 데이터 형식으로 단어로만 말해줘'
        }
        else if(data == 'snow'){
            message.prompt = '눈 오는데 메뉴를 추천해줘 답은 5개정도 단어로만 말해줘'
        }
        else if(data == 'rain'){
            message.prompt = '비 오는데 메뉴를 추천해줘 답은 5개정도 단어로만 말해줘'
        }
        else if(data == 'clear'){
            message.prompt = '맑은 날씨에 어울리는 메뉴를 추천해줘 답은 5개정도 단어로만 말해줘'
        }

        
        const server = `${path}/openai/chat`
        
        try{ 
            console.log(message)
            const res =await axios.get(server,{
                params:message
            })
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }
    return{
        GET_RECIPE_WEHATER
    }
}