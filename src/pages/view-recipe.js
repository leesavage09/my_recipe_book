import React from 'react'
import Layout from "../components/layout"
import Img from '../components/RecipeImage'
import style from './scss/view-recipe.module.scss'

const ViewRecipe = (props) => {
    if (typeof props.location.state === `undefined`) { return null}

    const recipe = props.location.state.recipe

    const ingredients = recipe.ingredients.map((ingreadient, idx) => (
        <li key={idx}>{ingreadient}</li>
    ))

    const method = recipe.method.map((paragraph, idx) => (
        <p key={idx} className={style.subheading}>{paragraph}</p>
    ))

    const image = recipe.imgURL ? <Img src={recipe.imgURL} className={style.image} /> : null

    return (
        <Layout title={recipe.title} show_back_btn={true}>
            {image}
            <div className={style.content} >
                <p className={style.heading}>Summary</p>
                <p className={style.subheading}>{recipe.summary}</p>
            </div>
            <div className={style.content}>
                <p className={style.heading}>Ingredients</p>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <div className={style.content}>
                <p className={style.heading}>Method</p>
                <div>{method}</div>
            </div>
        </Layout>
    )

}

export default ViewRecipe
