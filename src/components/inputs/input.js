import React from 'react'
import { text_input } from './scss/input.module.scss'

const Input = ({ rows, type, placeholder, className, onChange, value }) => {
//TODO There should be to text areas
    if (type === "textarea") {
        return (
            <textarea rows={rows} placeholder={placeholder} className={`${text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
    else {
        return (
            <input placeholder={placeholder} className={`${text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
}

export default Input