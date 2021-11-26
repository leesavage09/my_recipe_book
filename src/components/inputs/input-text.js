import React from 'react'
import { text_input } from './scss/inputs.module.scss'

const InputText = (props) => {

    if (props.type === "textarea") {
        return (
            <textarea rows="10" placeholder={props.placeholder} className={text_input} />
        )
    }
    else {
        return (
            <input placeholder={props.placeholder} className={text_input} />
        )
    }
}

export default InputText