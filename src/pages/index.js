import * as React from "react"
import Layout from "../components/layout"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from "../components/button/button"
import { style_postion_btn, style_center_text } from "./scss/index.module.scss";

const IndexPage = () => (
  <Layout title="My Recipe Book">
    <p className={style_center_text}>
            Add a new recipe to your recipe book<br />
            Click the plus button to get started
        </p>
    <Button to="/add-recipe" primaryCTA={true} icon={faPlus} className={style_postion_btn}/>
  </Layout>
)

export default IndexPage