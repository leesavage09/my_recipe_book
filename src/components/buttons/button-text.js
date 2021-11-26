import React from 'react'
import { text_button } from './scss/buttons.module.scss'

const ButtonText = (props) => (
    <button className={text_button}>
        {props.children}
    </button>
)
export default ButtonText