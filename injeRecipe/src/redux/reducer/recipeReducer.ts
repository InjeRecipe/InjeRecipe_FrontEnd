import { SEARCH_RECIPE } from "../action/actionRecipe"

const data ={
    searchRecipe:null,
}
export const recipeReducer = (state = data,action:any) =>{
    console.log('recipe reducer',action.data)
    switch(action.type){
        case SEARCH_RECIPE:{
            return{
                searchRecipe: action.data
            }
        }
            
    }
    return {...state}
}