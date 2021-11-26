import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import NoRecipes from "../components/norecipes"
import ButtonIcon from "../components/buttons/button-icon"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Head title="My Recipe Book" />
    <NoRecipes />
    <Link to="/add-recipe"><ButtonIcon icon={faPlus} /></Link>
  </Layout>
)

export default IndexPage