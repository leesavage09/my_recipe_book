import * as React from "react"
import Layout from "../components/layout"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../components/button/button"
import { style_postion_btn, style_center_text } from "./scss/index.module.scss";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";

const IndexPage = () => {
  const recipes = useSelector(state => state.recipes);
  const content = recipes.length > 0 ? RecipeList(recipes) : NoRecipes()

  return (
    <Layout title="My Recipe Book">
      {content}
      <Button to="/add-recipe" primaryCTA={true} icon={faPlus} className={style_postion_btn} />
    </Layout>
  )
}

const NoRecipes = () => (
  <p className={style_center_text}>
    Add a new recipe to your recipe book<br />
    Click the plus button to get started
  </p>
)

export default IndexPage