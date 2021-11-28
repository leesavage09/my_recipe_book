import * as React from "react"
import Layout from "../components/layout"
import NoRecipes from "../components/norecipes"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../components/button/button"

const IndexPage = () => (
  <Layout title="My Recipe Book">
    <NoRecipes />
    <Button to="/add-recipe" primaryCTA={true} icon={faPlus}/>
  </Layout>
)

export default IndexPage