import React from 'react'
import {text_input} from './scss/inputs.module.scss'

const InputText = (props) => {
    return (
        <input placeholder={props.placeholder} className={text_input} />
    )
}

export default InputText