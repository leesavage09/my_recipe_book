import React, { useEffect, useState } from 'react'
import Input from '../components/inputs/input'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'
import { style_container, style_flex_column, style_image, style_loading, style_button } from "./scss/create-recipe.module.scss";
import qs from 'qs'
import { navigate } from 'gatsby-link'
import { useDispatch } from 'react-redux'
import { add_recipe } from '../slice/recipesSlice'

const CreateRecipe = (props) => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [method, setMethod] = useState([])
    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

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

        //https://my-recipe-book-server.herokuapp.com/graphql
        //http://localhost:3001/graphql
        const response = await fetch("https://my-recipe-book-server.herokuapp.com/graphql", {
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
                setTitle(name)
                setSummary("Preparation Time: " + time.prep + "\r\nCooking Time: " + time.cook + "\r\n" + servings)
                setIngredients(ingredients)
                setMethod(instructions)
                setImageUrl(image)
                setLoading(false)
            }
            else {
                navigate(`/recipe-not-found`)
            }
        })();

    }, []);

    const handleSave = () => {
        dispatch(add_recipe({
            title: title,
            imgURL: imageUrl,
            summary: summary,
            ingredients: ingredients,
            method: method
        }))
        navigate("/")
    }

    const imageElement = imageUrl ? <img className={style_image} src={imageUrl} alt={title} /> : null

    if (loading) {
        return (
            <div className={style_loading}><p>Loading...</p></div>
        )
    }
    else {
        return (
            <Layout title="Create Recipe" show_back_btn={true} save_btn_action={handleSave}>
                <div className={style_container}>
                    <label className={style_flex_column}>Title
                        <Input placeholder="Title"
                            value={title} onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </label>

                    {imageElement}

                    <label className={style_flex_column}>Summary
                        <Input rows="4" type="textarea" placeholder="Summary"
                            value={summary} onChange={(e) => { setSummary(e.target.value) }}
                        />
                    </label>

                    <label className={style_flex_column}>Ingredients
                        <Input rows={10} type="textarea" placeholder="Ingredients"
                            value={ingredients.join('\r\n')} onChange={(e) => { setIngredients(e.target.value.split('\n')) }}
                        />
                    </label>

                    <label className={style_flex_column}>Method
                        <Input rows={15} type="textarea" placeholder="Method"
                            value={method.join('\r\n\r\n')} onChange={(e) => { setMethod(e.target.value.split('\n\n')) }}
                        />
                    </label>

                    <Button primaryCTA={true} icon={faCheck} onClick={handleSave} className={style_button}>Save</Button>
                </div>
            </Layout>
        )
    }

}

export default CreateRecipe
