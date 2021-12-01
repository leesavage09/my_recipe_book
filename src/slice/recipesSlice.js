import { createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const localStore = localStorage.getItem('recipes')
    return localStore ? JSON.parse(localStore) : []
  } else {
    return []
  }
}

const initialState = getLocalStorage()

const RecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add_recipe: (state, action) => {
      state.push(action.payload)
    },
    remove_recipe: (state) => {
      //TODO
    }
  },
})

export const { add_recipe, remove_recipe } = RecipesSlice.actions

export default RecipesSlice.reducer
