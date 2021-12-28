import React from 'react'
import style from './scss/head.module.scss'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

const Head = ({ show_back_btn, back_btn_action, save_btn_action, title } : {show_back_btn?:Boolean, back_btn_action?:Function, save_btn_action?:Function, title:String}) => {

    const goBackAction = back_btn_action ? back_btn_action : () => navigate(-1)//TODO there was a better way with the replace history on navigate option

    const GoBackBtn = show_back_btn ? <button className={style.back_btn} onClick={()=>goBackAction()}>
        <FontAwesomeIcon icon={faArrowLeft} />
    </button> : null


    const SaveBtn = save_btn_action ? <button className={style.save_btn} onClick={() => save_btn_action()}>
        <FontAwesomeIcon icon={faCheck} />
    </button> : null

    return (
        <div className={style.page_head}>
            <title>{title}</title>
            {GoBackBtn}
            <h1>{title}</h1>
            {SaveBtn}
        </div>
    )
}

export default Head