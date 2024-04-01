import React from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Colors } from "../../color/Colors"
import { useDispatch, useSelector } from "react-redux"
import { RootReducerState } from "../../redux/store"
import { RecipeRenderItem } from "./RecipeRenderItem"
import { useNavigation } from "@react-navigation/native"
import { useDimention } from "../../hooks/useDimension"
import { recipeService } from "../../services/recipeService"
import { setUserUploadBoard } from "../../redux/action/actionLogin"
import { useConvert } from "../../hooks/useConvert"

export const UserRecipeView = ({
    setIsLoading
}:any) => {
    const recipeData = useSelector((state:RootReducerState)=>state.login.userUploadRecipe)
    const token = useSelector((state:RootReducerState)=> state.login.userToken)
    const {POST_IMAGE_SEARCH} = recipeService()
    const {converTextToArray} = useConvert()
    const data: any = useSelector<RootReducerState>((state) => state.login.weatherRecipe)
    
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const {getHeight,getWeight} = useDimention()
   const {POST_USER_UPLOAD_RECIPE} = recipeService()
    const onPressEdit = () => {
        POST_USER_UPLOAD_RECIPE(token).then((res:any)=>{
            dispatch(setUserUploadBoard(res.data))
        })
    }
    function convertToHttps(path:string) {
        console.log(path)
        if (path == null){
            return 'test'
        }
        else if (path.startsWith('http://')) {
            return path.replace('http://', 'https://');
        }
        else {
            return path;
        }
    }
    const RenderItem = ({item}:any) =>{
        
        const onPressRecipe = () => {
            setIsLoading(true)
            console.log(item)
            // navigation.navigate('RecipeView',{item})
            if(item.recipe_parts_dtls!= null){
                const postData = converTextToArray(item.recipe_parts_dtls)
                
                POST_IMAGE_SEARCH({
                    data:postData,
                    token:token
                }).then((res)=>{
                    if(postData[0] == '재료'){postData.shift();res.data.shift()}
                    setIsLoading(false)
                    navigation.navigate('RecipeView',{item,res,postData})
                })
            }
            else{
                setIsLoading(false)
                navigation.navigate('RecipeView',{item})
            }
        }
        return (
            <TouchableOpacity style={{
                width:getWeight() * 0.33,
                height:getHeight() * 0.24,
            }} onPress={onPressRecipe}>
            <View style={{ 
                
                flex: 0.9,
                backgroundColor:Colors.FONT_WHITE,
                borderRadius:15,
                marginRight:10,
                marginBottom:15,
                borderWidth:0.3,
                borderColor:Colors.SEPARATED_LINE_TORNUP,
                
                 }}>
                <View style={{flex:0.7,width:'100%'}}>
                    <Image 
                    style={{flex:1,
                        borderTopLeftRadius:10,
                        borderTopRightRadius:10}}
                    source={{uri:convertToHttps(item.recipe_file_s)}}/>
                </View>
                <View style={{flex:0.3,width:'100%',alignItems:"center",justifyContent:"center",}}>
                    <Text style={{color:Colors.BUTTON_SIGNIN}}>
                        {item.user_name!=null?item.recipe_eng:`인제 레시피`}
                    </Text>
                <Text style={{
                    alignContent:"center",
                    justifyContent:"center",
                    textAlign:"center",
                    alignItems:"center"}} numberOfLines={2}  >
                    {item.recipe_nm}
                </Text>
                </View>
                
            </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={{  flex:1, alignItems: "center", }}>
            <View style={{ flex: 0.15, width: '100%', paddingHorizontal: 20, paddingTop: 20,marginTop:20,marginBottom:40 }}>
                {/* keyword select view */}
                <Text style={{ fontSize: 22,color:Colors.REFRIGATOR_AI_BUTTON,fontWeight:'bold' }}>사용자가 직접
                    <Text style={{fontSize:18, fontWeight:'normal',color:'black'}}> 작성한</Text>
                </Text>
                <Text style={{ fontSize: 18, marginTop: 3 }}>다음과 같은 레시피를 사용해보세요.</Text>
            </View>
            <View style={{ flex: 0.7, width: '100%', paddingLeft: 20,}}>
                <FlatList
                    style={{
                        width: '100%',
                        flex: 1,
                    }}
                    data={recipeData}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={({ item, index }) => {
                        console.log("#####",item)
                            return (
                               <RenderItem item={item}/>
                            )
                        
                        
                        
                    }} />
            </View>
            <View style={{
                flex: 0.15,
                width: '100%',
                justifyContent: "center",
                alignItems: "center"
            }}>
                {/* refresh view */}
                <TouchableOpacity style={{
                    flex: 0.7,
                    borderWidth: 0.8,
                    borderColor: Colors.SEPARATED_LINE_TORNUP,
                    width: '80%',
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'row'
                }}
                    onPress={onPressEdit}>
                    <Text style={{ fontSize: 16, marginRight: 5 }}>
                        새로고침
                    </Text>
                    <Icon name="refresh" size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
}