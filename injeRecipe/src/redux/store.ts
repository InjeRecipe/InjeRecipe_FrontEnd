import { applyMiddleware, combineReducers, createStore } from 'redux'

import { loginReducer } from './reducer/loginReducer'

const rootReducer = combineReducers({
    login:loginReducer
})
const store = createStore(rootReducer)

export type RootReducerState = ReturnType<typeof rootReducer>
export default store