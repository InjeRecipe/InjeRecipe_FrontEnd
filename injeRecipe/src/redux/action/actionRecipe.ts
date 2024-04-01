export const SEARCH_RECIPE = "SEARCH_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const searchRecipe = (data:any) =>{
    console.log('action data /////',data)
    return{
        type:SEARCH_RECIPE,
        data:data
    }
}

export const editRecipe = (data:any) => {
    return{
        type:EDIT_RECIPE,
        data:data
    }
}