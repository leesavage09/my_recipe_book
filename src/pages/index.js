import * as React from "react"
import AddRecipeBtn from "../components/addrecipebtn"
import Head from "../components/head"
import NoRecipes from "../components/norecipes"
import "../scss/global.scss"

const IndexPage = () => {
  return (
    <main>
      <Head />
      <NoRecipes />
      <AddRecipeBtn />
    </main>
  )
}

export default IndexPage
