import axios from 'axios'
export const recipeService =() =>{
    
    const path = 'http://localhost:8080'

    const GET_RECIPE = async (data:any) =>{
        
        const server = `${path}/api/recipe`
        console.log(server)
        console.log(data)
        try{ 
            const res =await axios.get(server,{
                params:data
            })
            console.log(res.data)    
            return res
                
        }
        
        catch(error){
            console.log('???qqqq')
        }
    }
    const GET_SERACH_RECIPE = async (data:any) =>{
        
        const server = `${path}/api/recipe`
        // console.log(data)
        const postData = data
        try{ 
            const res =await axios.get(server,{
                params:postData
            })
            console.log(res.data)
            const responseData = JSON.parse(res.data.data);
            console.log('GET_SERACH_RECIPE =============',responseData)
            return responseData
                
        }
        
        catch(error){
            console.log(error)
        }
    }
    return{
        GET_RECIPE,
        GET_SERACH_RECIPE
    }
}