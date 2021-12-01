import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { style_item, style_container, style_heading, style_subheading, style_image, style_list } from "./scss/RecipeList.module.scss"

const NoImage = <StaticImage src="../images/defaultRecipe.png" width={73} height={80} className={style_image} alt="Recipe Icon" />

const RecipeList = (recipes) => {

  const items = recipes.map((recipe) => {
    const img = recipe.imgURL ? <img src={recipe.imgURL} className={style_image} alt={recipe.title} /> : NoImage

    return (
      <li key={recipe.title} className={style_item}>
        <div className={style_container}>
          <p className={style_heading}>{recipe.title}</p>
          <p className={style_subheading}>{recipe.summary}</p>
        </div>
        {img}
      </li >)
  });

  return (
    <ul className={style_list}>
      {items}
    </ul>
  )
}

export default RecipeList
