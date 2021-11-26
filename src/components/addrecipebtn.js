import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { button, icon, fa_icon } from './scss/addrecipebtn.module.scss'

export default function AddRecipeBtn() {
    return (
        <div className={button}>
            <div className={icon}>
                <FontAwesomeIcon className={fa_icon} icon={faPlus} />
            </div>
        </div>
    )
}
