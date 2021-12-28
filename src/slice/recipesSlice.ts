import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { gql } from "@apollo/client";

export interface RecipeType {
  title: string,
  imgURL: string,
  summary: string,
  ingredients: Array<string>,
  method: Array<string>,
  url: string
}

const getLocalStorage = (): Array<RecipeType> => {
  if (typeof window !== 'undefined') {
    const localStore = localStorage.getItem('recipes')
    return localStore ? JSON.parse(localStore) : []
  } else {
    return []
  }
}

const initialState: Array<RecipeType> = getLocalStorage()

const RecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add_recipe: (state: Array<RecipeType>, action: PayloadAction<RecipeType>) => {
      state.push(action.payload)
    }
  },
})

export const { add_recipe } = RecipesSlice.actions

export const GetRecipe = gql`
query GetRecipe($url: String!) {
    recipe(url: $url) {
        image
        ingredients
        instructions
        name
        servings
        tags
        time {
            active
            cook
            inactive
            prep
            ready
            total
        }
    }
}`;

export default RecipesSlice.reducer
