import React from 'react'
import { text_input } from './scss/inputs.module.scss'

const InputText = ({type, placeholder, className}) => {

    if (type === "textarea") {
        return (
            <textarea rows="10" placeholder={placeholder} className={`${text_input} ${className}`} />
        )
    }
    else {
        return (
            <input placeholder={placeholder} className={`${text_input} ${className}`} />
        )
    }
}

export default InputText