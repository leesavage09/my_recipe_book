import React from 'react'
import CreateRecipeForm from "../components/CreateRecipeForm"
import { RecipeType } from '../slice/recipesSlice'

const NewRecipe = () => {
    
    const recipe: RecipeType = {
        title: "",
        imgURL: null,
        summary: "",
        ingredients: [],
        method: [],
        url: null
    }

    return (
        <CreateRecipeForm recipe={recipe} />
    )

}

export default NewRecipe
