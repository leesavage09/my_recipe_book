import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Recipe {
  title: string,
  imgURL: string,
  summary: string,
  ingredients: Array<string>,
  method: Array<string>,
  url: string
}

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
    add_recipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload)
    }
  },
})

export const { add_recipe } = RecipesSlice.actions

export default RecipesSlice.reducer
