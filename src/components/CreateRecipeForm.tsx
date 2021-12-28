import React, { useState } from 'react'
import Input from './inputs/input'
import TextArea from './inputs/text-area'
import Layout from './layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import IconButton from './button/icon-button'
import style from "./scss/create-recipe-form.module.scss";
import { navigate } from 'gatsby-link'
import { useDispatch } from 'react-redux'
import { add_recipe, RecipeType } from '../slice/recipesSlice'

const CreateRecipeForm = ({ recipe }: { recipe: RecipeType }) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState(recipe.title)
    const [summary, setSummary] = useState(recipe.summary)
    const [ingredients, setIngredients] = useState(recipe.ingredients)
    const [method, setMethod] = useState(recipe.method)

    const handleSave = () => {
        dispatch(add_recipe({
            title: title,
            imgURL: recipe.imgURL,
            summary: summary,
            ingredients: ingredients,
            method: method,
            url: recipe.url
        }))
        navigate("/")
    }

    return (
        <Layout title='Create Recipe' show_back_btn={true} save_btn_action={handleSave}>
            <div className={style.container}>
                <label className={style.flex_column}>Title
                    <Input placeholder="Title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                {recipe.imgURL ? <img className={style.image} src={recipe.imgURL} alt={title} /> : null}

                <label className={style.flex_column}>Summary
                    <TextArea
                        rows={4}
                        placeholder="Summary"
                        value={summary}
                        onChange={(e) => { setSummary(e.target.value) }}
                    />
                </label>

                <label className={style.flex_column}>Ingredients
                    <TextArea
                        rows={10}
                        placeholder="Ingredients"
                        value={ingredients.join('\r\n')}
                        onChange={(e) => { setIngredients(e.target.value.split('\n')) }}
                    />
                </label>

                <label className={style.flex_column}>Method
                    <TextArea
                        rows={15}
                        placeholder="Method"
                        value={method.join('\r\n\r\n')}
                        onChange={(e) => { setMethod(e.target.value.split('\n\n')) }}
                    />
                </label>

                <IconButton
                    primaryCTA={true}
                    icon={faCheck}
                    onClick={handleSave}
                    className={style.button}
                >
                    Save
                </IconButton>
            </div>
        </Layout>
    )
}

export default CreateRecipeForm
