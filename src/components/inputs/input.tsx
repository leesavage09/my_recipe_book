import React from 'react'
import { ChangeEventHandler } from 'react'
import style from './scss/input.module.scss'

interface InputTypes {
    placeholder?: string,
    className?: String,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    value?: string
}
const Input = (props: InputTypes): JSX.Element => {
    return (
        <input
            placeholder={props.placeholder}
            className={`${style.text_input} ${props.className}`}
            onChange={props.onChange}
            value={props.value}
        />
    )
}

export default Input
