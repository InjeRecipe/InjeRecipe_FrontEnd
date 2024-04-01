const recipePostData = {
    recipeSeq:'22',
    recipeNm:'test',
    recipeWay:'test',
    recipePat:'test',
    recipeEng:'',
    recipeFileS:null,
    recipePartsDtls:[],
    recipeImages:[],
    recipeManuals:[]
}
export const useRecipe = () => {
    
    const setRecipeSeq = (data:any) =>{
        recipePostData.recipeEng = data
        console.log(recipePostData)
    }
    const setRecipeNm = (data:any) =>{

        recipePostData.recipeNm = data
        console.log(recipePostData)
    }
    const setRecipeWay = (data:any) =>{
        recipePostData.recipeWay = data
        console.log(recipePostData)
    }
    const setRecipePat = (data:any) =>{
        recipePostData.recipePat = data
        console.log(recipePostData)
    }
    const setRecipeEng = (data:any) =>{
        
        recipePostData.recipeEng = data
        console.log(recipePostData)
    }
    const setRecipeFileS = (data:any) =>{
        recipePostData.recipeFileS = data
        console.log(recipePostData)
    }
    const setRecipePartsDtls = (data:any) =>{
        recipePostData.recipePartsDtls = data
        console.log(recipePostData)
    }
    
    const setRecipeImages = (data:any) =>{
        recipePostData.recipeImages = data
        console.log(recipePostData)
    }
    
    const setRecipeManuals = (data:any) =>{
        recipePostData.recipeManuals = data
        console.log(recipePostData)
    }
    
    
    return {
        recipePostData,
        setRecipeEng,
        setRecipeFileS,
        setRecipeImages,
        setRecipeManuals,
        setRecipeNm,
        setRecipePartsDtls,
        setRecipePat,
        setRecipeSeq,
        setRecipeWay
    }
}