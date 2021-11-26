import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab_button, icon, fa_icon } from './scss/buttons.module.scss'

const ButtonIcon = (props) => (
    <button className={fab_button} >
        <div className={icon}>
            <FontAwesomeIcon className={fa_icon} icon={props.icon} />
        </div>
    </button>
)

export default ButtonIcon