import React, { useEffect, useState } from 'react'
import Input from '../components/inputs/input'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'
import { style_full_width, style_image, style_loading } from "./scss/create-recipe.module.scss";
import qs from 'qs'
import { navigate } from 'gatsby-link'

const CreateRecipe = (props) => {
    const [name, setName] = useState("")
    const [summary, setSummary] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [method, setMethod] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(true)

    const getRecipe = async (url) => {
        if (!url) {
            return null
        }
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
        return data.data.recipe
    }

    useEffect(() => {
        const url = qs.parse(props.location.search, { ignoreQueryPrefix: true }).q;
        if (!url) {
            setLoading(false)
            return
        }

        (async () => {
            const recipe = await getRecipe(url)
            if (recipe) {
                const { name, time, servings, ingredients, instructions, image } = recipe
                setName(name)
                setSummary("Preparation Time: " + time.prep + "\r\nCooking Time: " + time.cook + "\r\n" + servings)
                setIngredients(ingredients.join('\r\n'))
                setMethod(instructions.join('\r\n\r\n'))
                setImageUrl(image)
                setLoading(false)
            }
            else {
                navigate(`/recipe-not-found`)
            }
        })();

    }, []);

    const handleSave = () => {
        console.log("Save Clicked")
    }

    const imageElement = imageUrl ? <img className={style_image} src={imageUrl} alt={name} /> : null

    if (loading) {
        return (
            <div className={style_loading}><p>Loading...</p></div>
        )
    }
    else {
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

}

export default CreateRecipe
