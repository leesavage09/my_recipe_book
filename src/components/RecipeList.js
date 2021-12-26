import * as React from "react"
import Img from './RecipeImage'
import style from "./scss/RecipeList.module.scss"
import { navigate } from 'gatsby-link'

const RecipeList = (recipes) => {

  const handleRecipeClicked = (recipe) => {
    navigate('/view-recipe', {
      state: { recipe }
    })
  }

  const items = recipes.map((recipe) => (
    <li key={recipe.title} className={style.item} onClick={()=>handleRecipeClicked(recipe)} >
      <div className={style.container}>
        <p className={style.heading}>{recipe.title}</p>
        <p className={style.subheading}>{recipe.summary}</p>
      </div>
      <Img src={recipe.imgURL} className={style.image} alt={recipe.title} />
    </li >)
  )

  return (
    <ul className={style.list}>
      {items}
    </ul>
  )
}

export default RecipeList
