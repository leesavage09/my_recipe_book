import React from 'react'
import style from './scss/head.module.scss'
import { navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'

interface HeadInterface {
    show_back_btn?: boolean,
    save_btn_action?: React.MouseEventHandler<HTMLButtonElement> ,
    title: string
}

const Head = ({ show_back_btn, save_btn_action, title }: HeadInterface) => {

    const GoBackBtn = show_back_btn ?
        <button className={style.back_btn} onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button> : null


    const SaveBtn = save_btn_action ?
        <button className={style.save_btn} onClick={save_btn_action}>
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