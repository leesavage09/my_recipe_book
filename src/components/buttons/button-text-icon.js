import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon_text_button, fa_icon_with_text, icon } from './scss/buttons.module.scss'
import { navigate } from "gatsby"

const ButtonTextIcon = (props) => (
    <button onClick={() => navigate(props.to)} className={`${icon_text_button} ${icon} ${props.className}`} >
        <FontAwesomeIcon className={fa_icon_with_text} icon={props.icon} />
        {props.children}
    </button>
)

export default ButtonTextIcon