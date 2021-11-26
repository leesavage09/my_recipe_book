import React from 'react'
import ButtonText from '../components/buttons/button-text'
import ButtonTextIcon from '../components/buttons/button-text-icon'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { add_own_recipe_button } from './scss/add-recipe.module.scss'

const AddRecipe = () => {

    return (
        <Layout title="Add Recipe" show_back_btn={true}>
            <h2>Import recipe from URL</h2>
            <InputText placeholder="Enter URL" />
            <ButtonText>Import</ButtonText>
            <p>Enter a website URL for a recipe you would like to import</p>
            <ButtonTextIcon className={add_own_recipe_button} icon={faPlus}>Add Own Recipe</ButtonTextIcon>
        </Layout>
    )
}

export default AddRecipe