import React from 'react'
import { page_head, back_btn } from './scss/head.module.scss'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Head = (props) => {

    const GoBackBtn = props.show_back_btn ? (<button className={back_btn} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
    </button>) : null

    return (
        <div className={page_head}>
            <title>{props.title}</title>
            {GoBackBtn}
            <h1>{props.title}</h1>
        </div>
    )
}

export default Head