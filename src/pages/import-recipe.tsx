import React from 'react'
import style from "./scss/import-recipe.module.scss";
import qs from 'qs'
import { PageProps } from "gatsby"
import RecipeNotFound from '../components/recipe-not-found'
import { GetRecipe, RecipeType } from '../slice/recipesSlice'
import { useQuery } from "@apollo/client"
import CreateRecipeForm from "../components/CreateRecipeForm"

const ImportRecipe = (props:PageProps) => {

    const url = qs.parse(props.location.search, { ignoreQueryPrefix: true }).q;
    const result = useQuery(GetRecipe, {
        variables: { url }
    })

    if (result.loading) {
        return (
            <div className={style.loading}><p>Loading...</p></div>
        )
    }
    else if (result.error) {
        return (
            <RecipeNotFound />
        )
    }
    else {
        const recipe: RecipeType = {
            title: result.data.recipe.name,
            imgURL: result.data.recipe.image,
            summary: "Preparation Time: " + result.data.recipe.time.prep + "\r\nCooking Time: " + result.data.recipe.time.cook + "\r\n" + result.data.recipe.servings,
            ingredients: result.data.recipe.ingredients,
            method: result.data.recipe.instructions,
            url: url ? url.toString() : ""
        }
        return (
            <CreateRecipeForm recipe={recipe} />
        )
    }
}

export default ImportRecipe
