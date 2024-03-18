import axios from 'axios'
export const chatGptService =() =>{
    
    const path = 'http://localhost:8080'
    const GET_RECIPE_WEHATER = async (data:any) =>{
        const message = {prompt:''}
        if(data == 'Clouds'){
           message.prompt = '날씨가 흐린데 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로 {"menu": ["라면", "우동", "만두국", "김치찌개", "칼국수", "된장찌개", "떡국", "쌀국수"]}와 같이 단어로만 말해줘'
        }
        else if(data == 'snow'){
            message.prompt = '눈 오는데 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로  {"menu": ["라면", "우동", "만두국", "김치찌개", "칼국수", "된장찌개", "떡국", "쌀국수"]}와 같이 단어로만 말해줘'
        }
        else if(data == 'rain'){
            message.prompt = '비 오는데 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로  {"menu": ["라면", "우동", "만두국", "김치찌개", "칼국수", "된장찌개", "떡국", "쌀국수"]}와 같이 단어로만 말해줘'
        }
        else if(data == 'Clear'){
            message.prompt = '맑은 날씨에 어울리는 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로  {"menu": ["라면", "우동", "만두국", "김치찌개", "칼국수", "된장찌개", "떡국", "쌀국수"]}와 같이 단어로만 말해줘'
        }
        else {
            message.prompt = '날씨가 흐린데 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로  {"menu": ["라면", "우동", "만두국", "김치찌개", "칼국수", "된장찌개", "떡국", "쌀국수"]}와 같이 단어로만 말해줘'
        }

        
        const server = `${path}/openai/chat`
        
        try{ 
            console.log('GET_RECIPE_WEHATER',message)
            const res =await axios.post(server,message)        
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }
    const GET_REFIGATOR_RECOMMEND = async(data:any) => {
        const message = {prompt:`${data}와 같은 재료를 활용해 만들 수 있는 레시피 하나를 단어로만 알려줘`}
        const server = `${path}/openai/chat`
        
        try{ 
            console.log(message)
            const res =await axios.post(server,message) 
            console.log(res.data)
             return res.data
        }
        catch(error){
            
            console.log(error)
        }
    }
    const GET_NEW_RECIPE = async() => {
        const message = {prompt:`다시 메뉴를 추천해줘 답은 8개정도를 json객체 데이터 형식으로 단어로만 말해줘`}
        const server = `${path}/openai/chat`
        
        try{ 
            console.log(message)
            const res =await axios.post(server,message)
            
            console.log(res.data,'apirespon222222222222')            
            return res.data
        }
        catch(error){
            
            console.log(error)
        }
    }
    const GET_KEYWORD_RECIPE = async() => {
        const message = {  "prompt": "한식 일식 중식 양식 메뉴를 추천해줘 답은 각각 8개정도를 json객체 데이터 형식으로 단어로만 말해주고 title은 kr jp cn usa 이렇게 해줘"}
        const server = `${path}/openai/chat`
        
        try{ 
            console.log(message)
            const res =await axios.post(server,message)
            
            console.log('Get keyword Recipe Item',res.data)            
            return res.data
        }
        catch(error){
            
            console.log(error)
        }
    }
    return{
        GET_RECIPE_WEHATER,
        GET_REFIGATOR_RECOMMEND,
        GET_NEW_RECIPE,
        GET_KEYWORD_RECIPE
    }
}