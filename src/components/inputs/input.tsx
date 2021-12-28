import React from 'react'
import { ChangeEventHandler } from 'react'
import style from './scss/input.module.scss'

const Input = ({ rows, type, placeholder, className, onChange, value }:{ rows?:number, type?:String, placeholder:string, className?:String, onChange:ChangeEventHandler, value:string }) => {
//TODO There should be to text areas
    if (type === "textarea") {
        return (
            <textarea rows={rows} placeholder={placeholder} className={`${style.text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
    else {
        return (
            <input placeholder={placeholder} className={`${style.text_input} ${className}`} onChange={onChange} value={value} />
        )
    }
}

export default Input