import * as React from "react"
import Img from './RecipeImage'
import { style_item, style_container, style_heading, style_subheading, style_image, style_list } from "./scss/RecipeList.module.scss"
import { navigate } from 'gatsby-link'

const RecipeList = (recipes) => {

  const handleRecipeClicked = (recipe) => {
    navigate('/view-recipe', {
      state: { recipe }
    })
  }

  const items = recipes.map((recipe) => (
    <li key={recipe.title} className={style_item} onClick={()=>handleRecipeClicked(recipe)} >
      <div className={style_container}>
        <p className={style_heading}>{recipe.title}</p>
        <p className={style_subheading}>{recipe.summary}</p>
      </div>
      <Img src={recipe.imgURL} className={style_image} alt={recipe.title} />
    </li >)
  )

  return (
    <ul className={style_list}>
      {items}
    </ul>
  )
}

export default RecipeList
