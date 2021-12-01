import { createSlice } from '@reduxjs/toolkit'

const initialState = []

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
