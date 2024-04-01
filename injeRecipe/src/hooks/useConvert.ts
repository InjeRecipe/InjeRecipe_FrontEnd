export const useConvert = () => {
    const convertArraytoText = (data:any) => {
        console.log(data,"covertArraytoText@@@@@@@@@@@@")
        const partsArray = ['']
        let newText =''
        if(data != null) {
            data.recipePartsDtls.map(({value,title}:any)=>{
                console.log(value)
                 newText+= title+" "+value+"g,"
                console.log(newText)
                
            })
            if (newText.endsWith(',')) {
                newText = newText.substring(0, newText.length - 1);
            }
            data.recipePartsDtls = newText
        }
        if(partsArray){
            partsArray.shift()
            
            console.log(data.recipePartsDtls)
            
        }
    } 
    const convertObjectToArray = (data:any) => {
        const manualArray = ['']
        console.log(data.recipeManuals)
        if(data != null) {
            data.recipeManuals.map(({id,value}:any)=>{
                console.log(value)
                manualArray.push(value)
            })
            manualArray.shift()
            data.recipeManuals = manualArray
        }
    }
    const converTextToArray = (data:any) => {
        
        const wordsArray = data.match(/[가-힣]+/g);
        wordsArray.map((line:any)=>{
            const index = line.indexOf("재료");
            if (index !== -1) {
                // "재료"를 포함하는 경우 해당 문자열을 삭제하고 다시 조립합니다.
                line = line.substring(index + 3); // "재료"와 공백을 포함하여 3글자를 삭제합니다.
            }
            return line.trim(); // 양 끝의 공백을 제거한 후 배열에 추가합니다.
        
        })
        return wordsArray
        // console.log(wordsArray);
    }
    return {
        convertArraytoText,
        convertObjectToArray,
        converTextToArray
    }
}