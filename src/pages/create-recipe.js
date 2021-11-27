import React from 'react'
import ButtonText from '../components/buttons/button-text'
import ButtonTextIcon from '../components/buttons/button-text-icon'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const CreateRecipe = () => (
    <Layout title="Create Recipe" show_back_btn={true} save_btn_action={()=>console.log("Save clicked")}>
        <InputText placeholder="Title" />
        <ButtonText>Add A Picture</ButtonText>
        <InputText type="textarea" placeholder="Summary" />

        <InputText type="textarea" placeholder="Ingredients" />

        <InputText type="textarea" placeholder="Method" />

        <ButtonTextIcon icon={faCheck}>Save</ButtonTextIcon>
    </Layout>
)

export default CreateRecipe