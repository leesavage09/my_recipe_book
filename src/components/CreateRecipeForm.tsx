import React, { useState } from 'react'
import Input from './inputs/input'
import Layout from './layout'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from './button/button'
import style from "./scss/create-recipe-form.module.scss";
import { navigate } from 'gatsby-link'
import { useDispatch } from 'react-redux'
import { add_recipe, RecipeType} from '../slice/recipesSlice'

function CreateRecipeForm({recipe}:{recipe:RecipeType}) {

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
                    value={title} onChange={(e: { target: { value: React.SetStateAction<string>} } ) => { setTitle(e.target.value) } } />
                </label>

                {recipe.imgURL ? <img className={style.image} src={recipe.imgURL} alt={title} /> : null}

                <label className={style.flex_column}>Summary
                    <Input rows={4} type="textarea" placeholder="Summary"
                        value={summary} onChange={(e: { target: { value: React.SetStateAction<string> } }) => { setSummary(e.target.value) }}
                    />
                </label>

                <label className={style.flex_column}>Ingredients
                    <Input rows={10} type="textarea" placeholder="Ingredients"
                        value={ingredients.join('\r\n')} onChange={(e: { target: { value: string } }) => { setIngredients(e.target.value.split('\n')) }}
                    />
                </label>

                <label className={style.flex_column}>Method
                    <Input rows={15} type="textarea" placeholder="Method"
                        value={method.join('\r\n\r\n')} onChange={(e: { target: { value: string } }) => { setMethod(e.target.value.split('\n\n')) }}
                    />
                </label>

                <Button primaryCTA={true} icon={faCheck} onClick={handleSave} className={style.button}>Save</Button>
            </div>
        </Layout>
    )
}

export default CreateRecipeForm
