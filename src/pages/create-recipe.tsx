import React, { useEffect, useState } from 'react'
import Input from '../components/inputs/input'
import Layout from '../components/layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../components/button/button'
import style from "./scss/create-recipe.module.scss";
import qs from 'qs'
import { navigate } from 'gatsby-link'
import { useDispatch } from 'react-redux'
import { add_recipe, GetRecipe } from '../slice/recipesSlice'
import { useLazyQuery } from "@apollo/client";

const CreateRecipe = (props) => {
    const dispatch = useDispatch()
    const [RunGetRecipeQuery, result] = useLazyQuery(GetRecipe)
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [method, setMethod] = useState([])
    const [imageUrl, setImageUrl] = useState("")
    const [url, setUrl] = useState("")

    const handleSave = () => {
        dispatch(add_recipe({
            title: title,
            imgURL: imageUrl,
            summary: summary,
            ingredients: ingredients,
            method: method,
            url: url
        }))
        navigate("/")
    }

    useEffect(() => {
        const url = qs.parse(props.location.search, { ignoreQueryPrefix: true }).q;
        if (url) {
            RunGetRecipeQuery({
                variables: { url }
            })
            setUrl(url)
        }
    }, []);

    useEffect(() => {
        if (!result.data) return
        setTitle(result.data.recipe.name)
        setSummary("Preparation Time: " + result.data.recipe.time.prep + "\r\nCooking Time: " + result.data.recipe.time.cook + "\r\n" + result.data.recipe.servings)
        setIngredients(result.data.recipe.ingredients)
        setMethod(result.data.recipe.instructions)
        setImageUrl(result.data.recipe.image)
    }, [result.data]);

    useEffect(() => {
        if (result.error) navigate(`/recipe-not-found`)
    }, [result.error]);

    if (!result || result.loading) {
        return (
            <div className={style.loading}><p>Loading...</p></div>
        )
    }
    else {
        return (
            <Layout title="Create Recipe" show_back_btn={true} save_btn_action={handleSave}>
                <div className={style.container}>
                    <label className={style.flex_column}>Title
                        <Input placeholder="Title"
                            value={title} onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </label>

                    {imageUrl ? <img className={style.image} src={imageUrl} alt={title} /> : null}

                    <label className={style.flex_column}>Summary
                        <Input rows="4" type="textarea" placeholder="Summary"
                            value={summary} onChange={(e) => { setSummary(e.target.value) }}
                        />
                    </label>

                    <label className={style.flex_column}>Ingredients
                        <Input rows={10} type="textarea" placeholder="Ingredients"
                            value={ingredients.join('\r\n')} onChange={(e) => { setIngredients(e.target.value.split('\n')) }}
                        />
                    </label>

                    <label className={style.flex_column}>Method
                        <Input rows={15} type="textarea" placeholder="Method"
                            value={method.join('\r\n\r\n')} onChange={(e) => { setMethod(e.target.value.split('\n\n')) }}
                        />
                    </label>

                    <Button primaryCTA={true} icon={faCheck} onClick={handleSave} className={style.button}>Save</Button>
                </div>
            </Layout>
        )
    }
}

export default CreateRecipe
