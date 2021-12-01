import React from 'react'
import Layout from "../components/layout"
import Img from '../components/RecipeImage'
import { style_image, style_content, style_heading, style_subheading } from './scss/view-recipe.module.scss'

const ViewRecipe = (props) => {

    const recipe = props.location.state.recipe

    const ingredients = recipe.ingredients.map((ingreadient, idx) => (
        <li key={idx}>{ingreadient}</li>
    ))

    const method = recipe.method.map((paragraph, idx) => (
        <p key={idx} className={style_subheading}>{paragraph}</p>
    ))

    const image = recipe.imgURL ? <Img src={recipe.imgURL} className={style_image} /> : null

    return (
        <Layout title={recipe.title} show_back_btn={true}>
            {image}
            <div className={style_content} >
                <p className={style_heading}>Summary</p>
                <p className={style_subheading}>{recipe.summary}</p>
            </div>
            <div className={style_content}>
                <p className={style_heading}>Ingredients</p>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <div className={style_content}>
                <p className={style_heading}>Method</p>
                <div>{method}</div>
            </div>
        </Layout>
    )

}

export default ViewRecipe
