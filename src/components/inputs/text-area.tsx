import React from 'react'
import { ChangeEventHandler } from 'react'
import style from './scss/input.module.scss'

interface Textarea {
    rows: number,
    placeholder?: string,
    className?: string,
    onChange?: ChangeEventHandler<HTMLTextAreaElement>,
    value?: string
}

const TextArea = (props: Textarea): JSX.Element => {
    return (
        <textarea
            rows={props.rows}
            placeholder={props.placeholder}
            className={`${style.text_input} ${props.className}`}
            onChange={props.onChange}
            value={props.value}
        />
    )
}

export default TextArea
