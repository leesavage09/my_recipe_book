import React from 'react'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { add_own_recipe_button, input_container } from './scss/add-recipe.module.scss'
import { Button } from '../components/button/button'

const AddRecipe = () => {

    return (
        <Layout title="Add Recipe" show_back_btn={true}>
            <h2>Import recipe from URL</h2>
            <div className={input_container}>
                <InputText placeholder="Enter URL" />
                <Button primaryCTA={true}>Import</Button>
            </div>
            <p>Enter a website URL for a recipe you would like to import</p>
            <Button
                to="/create-recipe"
                className={add_own_recipe_button}
                icon={faPlus}
            >
                Add Own Recipe
            </Button>
        </Layout>
    )
}

export default AddRecipe