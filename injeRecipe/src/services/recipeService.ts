import axios from 'axios'
export const recipeService =() =>{
    
    const path = 'http://localhost:8080'

    const GET_RECIPE = async ({data,token}:any) =>{
        
        const server = `${path}/api/search/recipes`
        console.log(server)
        console.log(data)
        try{ 
            const res =await axios.post(server,data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            return res       
        }
        catch(error){
            console.log('???qqqq')
        }
    }
    const GET_SERACH_RECIPE = async ({data,token}:any) =>{
        
        const server = `${path}/api/search/recipe`
        // console.log(data)
        const postData = data
        try{ 
            const res =await axios.post(server,postData,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            return res.data
                
        }
        
        catch(error){
            console.log(error)
        }
    }
    const GET_SERACH_RECIPES = async ({data,token}:any) =>{
        console.log(data,'\n',token)
        const server = `${path}/api/search/recipes`
        const postData = data
        try{ 
            const res =await axios.post(server,data,{
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            return res.data
                
        }
        
        catch (error:any) {
            if (error.response) {
              // 서버가 응답한 경우
              console.log('서버 응답 데이터:', error.response.data);
              console.log('응답 상태 코드:', error.response.status);
              console.log('응답 헤더:', error.response.headers);
            } else if (error.request) {
              // 요청이 서버에 도달하지 못한 경우
              console.log('서버로의 요청이 전송되지 않았습니다.');
            } else {
              // 오류가 발생한 경우
              console.error('오류 메시지:', error.message);
            }
          }
    }
    const POST_RECIPE_UPLOAD = async({data,token}:any) =>{
        const server = `${path}/board`
        
        
        const formData = new FormData();
        const array = ['']
        console.log("##########",data.recipeManuals)
        array.shift()
        data.recipeManuals.map((item:any)=>{
            array.push(item)
        })
        formData.append(`recipeSeq`,data.recipeSeq)
        formData.append(`recipeNm`,data.recipeNm)
        formData.append(`recipeWay`,data.recipeWay)
        formData.append(`recipePat`,data.recipePat)
        formData.append(`recipeEng`,data.recipeEng)
        formData.append(`recipePartsDtls`,data.recipePartsDtls)
        formData.append(`recipeFileS`,data.recipeFileS)
        formData.append(`recipeManuals`,array)
        // 파일 배열을 FormData에 추가
        data.recipeImages.forEach((file:any, index:any) => {
            console.log(file)
          formData.append(`recipeImages`, {
            uri: file.uri,
            type: file.type, // 파일의 MIME 타입
            name: file.name, // 파일 이름
          });
        });
        
        
        console.log("POST_RECIPE_UPLOAD",formData)
        try{ 
            const res =await axios.post(server,formData,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                  },
                
            })
            return res.data
                
        }
        
        catch(error){
            console.log(error)
        }
    }

    const POST_USER_UPLOAD_RECIPE = async(token:any)=>{
        try{
            const server = `${path}/board/posts`
            console.log("%%%%%%%%%%%%%%%%%%")
            const res = await axios.post(server,null,{
                headers: {
                    Authorization: `Bearer ${token}`
                  },
            })
            console.log("%%%%%%%%%%%%%%%%%%",res.data)
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }

    const POST_MEMBER_BOARD_RECIPE = async(token:any)=>{
        try{
            const server = `${path}/board/member/posts`
            console.log("%%%%%%%%%%%%%%%%%%")
            const res = await axios.post(server,null,{
                headers: {
                    Authorization: `Bearer ${token}`
                  },
            })
            console.log("%%%%%%%%%%%%%%%%%%",res.data)
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }

    const POST_IMAGE_SEARCH = async({data,token}:any) => {
        try{
            const server = `${path}/image/search`
            const postData = {
                name:data
            }
            console.log(postData)
            const res = await axios.post(server,postData,{
                headers: {
                    Authorization: `Bearer ${token}`
                  },
            })
            console.log("%%%%%%%%%%%%%%%%%%",res.data)
            return res.data
        }
        catch(error){
            console.log(error)
        }
    }
    return{
        GET_RECIPE,
        GET_SERACH_RECIPE,
        GET_SERACH_RECIPES,
        POST_RECIPE_UPLOAD,
        POST_USER_UPLOAD_RECIPE,
        POST_MEMBER_BOARD_RECIPE,
        POST_IMAGE_SEARCH
    }
}