import React from 'react'
import { page_head, back_btn, save_btn } from './scss/head.module.scss'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

const Head = ({ show_back_btn, back_btn_action, save_btn_action, title }) => {

    const goBackAction = back_btn_action ? back_btn_action : () => navigate(-1)

    const GoBackBtn = show_back_btn ? <button className={back_btn} onClick={goBackAction}>
        <FontAwesomeIcon icon={faArrowLeft} />
    </button> : null


    const SaveBtn = save_btn_action ? <button className={save_btn} onClick={() => save_btn_action()}>
        <FontAwesomeIcon icon={faCheck} />
    </button> : null

    return (
        <div className={page_head}>
            <title>{title}</title>
            {GoBackBtn}
            <h1>{title}</h1>
            {SaveBtn}
        </div>
    )
}

export default Head