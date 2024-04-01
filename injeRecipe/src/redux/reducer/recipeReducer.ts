import { EDIT_RECIPE, SEARCH_RECIPE } from "../action/actionRecipe"

const data ={
    searchRecipe:null,
    recipePostData:{
        recipeSeq:'',
        recipeNm:'',
        recipeWay:'',
        recipePat:'',
        recipeEng:'',
        recipeFileS:{},
        recipePartsDtls:[],
        recipeImages:[],
        recipeManuals:[]
    }
}
export const recipeReducer = (state = data,action:any) =>{
    console.log('recipe reducer',action.data)
    switch(action.type){
        case SEARCH_RECIPE:{
            return{
                searchRecipe: action.data
            }
        }
        case EDIT_RECIPE:{
            return{
                ...state,
                
            }
        }
            
    }
    return {...state}
}