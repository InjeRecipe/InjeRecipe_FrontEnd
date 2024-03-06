import axios from 'axios'
export const recipeService =() =>{
    
    const path = 'http://localhost:8080'

    const GET_RECIPE = async (data:any) =>{
        
        const server = `${path}/api/recipes`
        console.log(server)
        console.log(data)
        try{ 
            const res =await axios.post(server,{
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
        
        const server = `${path}/api/recipes`
        // console.log(data)
        const postData = data
        try{ 
            const res =await axios.post(server,postData)
            
            
            console.log('GET_SERACH_RECIPE =============',res.data)
            return res.data
                
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