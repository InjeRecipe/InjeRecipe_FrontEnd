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
            
            return res
                
        }
        
        catch(error){
            console.log('???qqqq')
        }
    }
    const GET_SERACH_RECIPE = async (data:any) =>{
        
        const server = `${path}/api/search/recipe`
        // console.log(data)
        const postData = data
        try{ 
            const res =await axios.post(server,postData)
            return res.data
                
        }
        
        catch(error){
            console.log(error)
        }
    }
    const GET_SERACH_RECIPES = async (data:any) =>{
        
        const server = `${path}/api/search/recipes`
        // console.log(data)
        const postData = data
        try{ 
            const res =await axios.post(server,postData)
            return res.data
                
        }
        
        catch(error){
            console.log(error)
        }
    }

    return{
        GET_RECIPE,
        GET_SERACH_RECIPE,
        GET_SERACH_RECIPES
    }
}