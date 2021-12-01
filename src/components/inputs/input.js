import React from 'react'
import { text_input } from './scss/input.module.scss'

const Input = ({ type, placeholder, className, onChange, value }) => {

    if (type === "textarea") {
        return (
            <textarea rows="10" placeholder={placeholder} className={`${text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
    else {
        return (
            <input placeholder={placeholder} className={`${text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
}

export default Input