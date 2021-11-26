import React from 'react'
import {text} from './scss/norecipes.module.scss'

const NoRecipes = () => {
    return (
        <p className={text}>
            Add a new recipe to your recipe book<br />
            Click the plus button to get started
        </p>
    )
}

export default NoRecipes