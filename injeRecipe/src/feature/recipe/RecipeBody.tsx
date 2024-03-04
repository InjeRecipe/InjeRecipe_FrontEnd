import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import { useDimention } from "../../hooks/useDimension"

export const RecipebodyView =({recipeData}:any) => {
    console.log('RecipeBodyView reccipeData' ,recipeData)
    const {getHeight} =useDimention()
   // MANUAL 속성들의 키를 배열로 추출
  // MANUAL 속성과 MANUAL_IMG 속성을 모두 포함한 키들을 추출하여 정렬

// MANUAL 속성과 MANUAL_IMG 속성을 각각 순서대로 배열에 담음
const manualArray = [];
for (let i = 1; i <= 20; i++) {
    const key = `MANUAL${i.toString().padStart(2, '0')}`;
    if (recipeData.item[key] !== "") {
        manualArray.push(recipeData.item[key]);
    }
}

const manualImgArray = [''];
for (let i = 1; i <= 20; i++) {
    const key = `MANUAL_IMG${i.toString().padStart(2, '0')}`;
    if (recipeData.item[key] !== "") {
        manualImgArray.push(recipeData.item[key]);
    }
}

const RecipeBodyRenderItem =({item,index}:any) => {
    const data = manualImgArray[index+1]
    
 function convertToHttps(path:string) {
            if (path.startsWith('http://')) {
                return path.replace('http://', 'https://');
            } else {
                return path;
            }
        }
    return(
        <View style={{height:getHeight()*0.4,alignItems:"center",justifyContent:"center",width:"100%"}}>
            <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
                <Image 
                    style={{width:'70%',height:200,marginBottom:25}}
                    source={{uri:convertToHttps(data)}}/>
            </View>
            <View style={{}}>
                <Text style={{}}>{item}</Text>
            </View>
        </View>
    )
}
console.log("Manual Array:", manualArray);
console.log("Manual Image Array:", manualImgArray);
    return(
        <View>
            <Text style={{alignSelf:"center",fontWeight:'bold',fontSize:22,marginTop:22}}>과정정보</Text>
            <FlatList
                style={{}}
                scrollEnabled={false}
                data={manualArray}
                renderItem={({item,index})=>{return(<RecipeBodyRenderItem item={item} index={index}/>)}}
            />
        </View>
    )
}