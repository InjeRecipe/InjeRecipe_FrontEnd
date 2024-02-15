export const SET_LOGINED_USER = "SET_LOGINED_USER"

export const setLoginedUser = (data:any) =>{
    return{
        type:SET_LOGINED_USER,
        data:data
    }

}