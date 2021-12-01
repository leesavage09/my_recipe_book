import React, { useState } from 'react'
import Input from '../components/inputs/input'
import Layout from '../components/layout'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { add_own_recipe_button, input_container } from './scss/add-recipe.module.scss'
import { Button } from '../components/button/button'
import { navigate } from 'gatsby-link'


const AddRecipe = () => {
    const [url, setUrl] = useState('')

    const handleImport = async () => {
        const encodedURL = encodeURIComponent(url)
        navigate(`/create-recipe?q=${encodedURL}`)
    }

    return (
        <Layout title="Add Recipe" show_back_btn={true}>
            <h2>Import recipe from URL</h2>
            <div className={input_container}>
                <Input placeholder="Enter URL" onChange={e => setUrl(e.target.value)} />
                <Button primaryCTA={true} onClick={handleImport}>Import</Button>
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