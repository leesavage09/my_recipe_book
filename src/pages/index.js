import * as React from "react"
import Layout from "../components/layout"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import FabButton from "../components/button/fab-button"
import style from "./scss/index.module.scss";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList";
import { navigate } from "gatsby";

const IndexPage = () => {
  const recipes = useSelector(state => state.recipes);
  const content = recipes.length > 0 ? RecipeList(recipes) : NoRecipes()

  return (
    <Layout title="My Recipe Book">
      {content}
      <FabButton
        primaryCTA={true}
        className={style.postion_btn}
        onClick={(e) => { navigate("/add-recipe") }}
        icon={faPlus}
      />
    </Layout>
  )
}

const NoRecipes = () => (
  <p className={style.center_text}>
    Add a new recipe to your recipe book<br />
    Click the plus button to get started
  </p>
)

export default IndexPage