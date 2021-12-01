import React, { useEffect, useState } from 'react'
import Input from '../components/inputs/input'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'
import { style_full_width, style_image } from "./scss/create-recipe.module.scss";
import qs from 'qs'

const CreateRecipe = (props) => {
    const [name, setName] = useState("")
    const [summary, setSummary] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [method, setMethod] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useEffect(async () => {
        const url = qs.parse(props.location.search, { ignoreQueryPrefix: true }).q;
        if (url) {
            const apiQuery = `query {
                  recipe(url:"${url}") {
                    image
                    ingredients
                    instructions
                    name
                    servings
                    tags
                    time {
                      active
                      cook
                      inactive
                      prep
                      ready
                      total
                    }
                  }
            }`

            const response = await fetch("http://localhost:3001/graphql", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: apiQuery
                }),
            })

            const data = await response.json()
            console.log(data.data.recipe)
            setName(data.data.recipe.name)
            setSummary("Preparation Time: " + data.data.recipe.time.prep + "\r\nCooking Time: " + data.data.recipe.time.cook + "\r\n" + data.data.recipe.servings)
            setIngredients(data.data.recipe.ingredients.join('\r\n'))
            setMethod(data.data.recipe.instructions.join('\r\n\r\n'))
            setImageUrl(data.data.recipe.image)
        }
    }, []);

    const handleSave = () => {
        console.log("Save Clicked")
    }

    const handleAddPicture = () => {
        console.log("Add A Picture Clicked")
    }

    const imageElement = imageUrl ? <img className={style_image} src={imageUrl} /> : <Button primaryCTA={true} onClick={handleAddPicture}>Add A Picture</Button>


    return (
        <Layout title="Create Recipe" show_back_btn={true} save_btn_action={handleSave}>
            <Input placeholder="Title" className={style_full_width}
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {imageElement}
            <Input type="textarea" placeholder="Summary" className={style_full_width}
                value={summary} onChange={(e) => { setSummary(e.target.value) }}
            />

            <Input type="textarea" placeholder="Ingredients" className={style_full_width}
                value={ingredients} onChange={(e) => { setIngredients(e.target.value) }}
            />

            <Input type="textarea" placeholder="Method" className={style_full_width}
                value={method} onChange={(e) => { setMethod(e.target.value) }}
            />

            <Button primaryCTA={true} icon={faCheck} onClick={handleSave}>Save</Button>
        </Layout>
    )
}

export default CreateRecipe