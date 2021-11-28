import React from 'react'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'

const CreateRecipe = () => (
    <Layout title="Create Recipe" show_back_btn={true} save_btn_action={()=>console.log("Save clicked")}>
        <InputText placeholder="Title" />
        <Button primaryCTA={true} >Add A Picture</Button>
        <InputText type="textarea" placeholder="Summary" />

        <InputText type="textarea" placeholder="Ingredients" />

        <InputText type="textarea" placeholder="Method" />

        <Button primaryCTA={true} icon={faCheck}>Save</Button>
    </Layout>
)

export default CreateRecipe