import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './scss/button.module.scss'

interface IconButtonInterface {
    primaryCTA?: boolean,
    icon: any,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    children: string
}

const IconButton = ({ primaryCTA, icon, className, onClick, disabled, children }: IconButtonInterface): JSX.Element => {

    const ctaStyle = primaryCTA ? style.primary : style.secondary

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`${style.cta_button} ${className} ${ctaStyle}`}
        >
            <FontAwesomeIcon className={style.fa_icon_with_text} icon={icon} />
            {children}
        </button>
    )
}

export default IconButton
