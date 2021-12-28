import React from 'react'
import CreateRecipeForm from "../components/CreateRecipeForm"
import { RecipeType } from '../slice/recipesSlice'

const NewRecipe = () => {
    
    const recipe: RecipeType = {
        title: "",
        imgURL: "",
        summary: "",
        ingredients: [],
        method: [],
        url: ""
    }

    return (
        <CreateRecipeForm recipe={recipe} />
    )

}

export default NewRecipe
