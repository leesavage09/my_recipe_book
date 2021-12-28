import React from 'react'
import style from './scss/button.module.scss'

interface ButtonInterface {
    primaryCTA?: boolean,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    children: string
}

const Button = ({ primaryCTA, children, className, onClick, disabled }: ButtonInterface) => {

    const ctaStyle = primaryCTA ? style.primary : style.secondary

    return (
        <button disabled={disabled}
            onClick={onClick}
            className={`${style.cta_button} ${className} ${ctaStyle}`}
        >
            {children}
        </button>
    )
}

export default Button
