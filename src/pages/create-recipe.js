import React from 'react'
import ButtonText from '../components/buttons/button-text'
import InputText from '../components/inputs/input-text'
import Layout from '../components/layout'

const CreateRecipe = () => (
    <Layout title="Create Recipe" show_back_btn={true}>
        <InputText placeholder="Title" />
        <ButtonText>Add A Picture</ButtonText>
        <InputText type="textarea" placeholder="Summary" />

        <InputText type="textarea" placeholder="Ingredients" />

        <InputText type="textarea" placeholder="Method" />
    </Layout>
)

export default CreateRecipe