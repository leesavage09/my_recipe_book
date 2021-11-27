import React from 'react'
import { page_head, back_btn, save_btn } from './scss/head.module.scss'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

const Head = (props) => {

    const GoBackBtn = props.show_back_btn ? <button className={back_btn} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
    </button> : null


    const SaveBtn = props.save_btn_action ? <button className={save_btn} onClick={() => props.save_btn_action()}>
        <FontAwesomeIcon icon={faCheck} />
    </button> : null

    return (
        <div className={page_head}>
            <title>{props.title}</title>
            {GoBackBtn}
            <h1>{props.title}</h1>
            {SaveBtn}
        </div>
    )
}

export default Head