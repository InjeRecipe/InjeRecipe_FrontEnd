import { SET_LOGINED_USER } from "../action/actionLogin"

const data ={

}
export const loginReducer = (state = data,action:any) =>{
    switch(action.type){
        case SET_LOGINED_USER:{
            return state
        }
        return null
    }
    return null
}