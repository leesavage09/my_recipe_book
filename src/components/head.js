import React from 'react'
import { page_head } from './scss/head.module.scss'

const Head = (props) => {
    return (
        <div className={page_head}>
            <title>{props.title}</title>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Head