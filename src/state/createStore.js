import { createStore as reduxCreateStore, combineReducers } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import recipeReducer from "../slice/recipesSlice"

const reducer = combineReducers({
  recipes: recipeReducer
})

const createStore =  () => reduxCreateStore(reducer, devToolsEnhancer());//TODO devtoos togel with env

export default createStore
