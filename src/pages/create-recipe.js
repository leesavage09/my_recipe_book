import React from 'react'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'
import { style_full_width } from "./scss/create-recipe.module.scss";

const CreateRecipe = () => {
    
    const handleSave = () => {
        console.log("Save Clicked")
    }

    const handleAddPicture = () => {
        console.log("Add A Picture Clicked")
    }
    
    return (
        <Layout title="Create Recipe" show_back_btn={true} save_btn_action={handleSave}>
            <InputText placeholder="Title" className={style_full_width} />
            <Button primaryCTA={true} onClick={handleAddPicture}>Add A Picture</Button>
            <InputText type="textarea" placeholder="Summary" className={style_full_width} />

            <InputText type="textarea" placeholder="Ingredients" className={style_full_width} />

            <InputText type="textarea" placeholder="Method" className={style_full_width} />

            <Button primaryCTA={true} icon={faCheck} onClick={handleSave}>Save</Button>
        </Layout>
    )
}

export default CreateRecipe