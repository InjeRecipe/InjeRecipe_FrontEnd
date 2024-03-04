export const SEARCH_RECIPE = "SEARCH_RECIPE"

export const searchRecipe = (data:any) =>{
    console.log('action data /////',data)
    return{
        type:SEARCH_RECIPE,
        data:data
    }
}