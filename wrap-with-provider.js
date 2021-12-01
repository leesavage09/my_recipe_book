import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/state/createStore"

const WrapWithProvider = ({ element }) => {

  const store = createStore()

  store.subscribe(() => {
    const recipes = store.getState().recipes
    localStorage.setItem('recipes', JSON.stringify(recipes))
  })
  
  return <Provider store={store}>{element}</Provider>
}

export default WrapWithProvider
