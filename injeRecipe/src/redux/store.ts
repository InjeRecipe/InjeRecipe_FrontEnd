import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { loginReducer } from './reducer/loginReducer'

const rootReducer = combineReducers({
    login:loginReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))

export type RootReducerState = ReturnType<typeof rootReducer>
export default store