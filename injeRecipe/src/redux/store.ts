import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import { loginReducer } from './reducer/loginReducer'
import { recipeReducer } from './reducer/recipeReducer'

const rootReducer = combineReducers({
    login:loginReducer,
    recipe:recipeReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))

export type RootReducerState = ReturnType<typeof rootReducer>
export default store