import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './scss/button.module.scss'

interface FabButtonInterface {
    primaryCTA?: boolean,
    icon: any,
    className?: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const FabButton = ({ primaryCTA, icon, className, onClick, disabled }: FabButtonInterface): JSX.Element => {

    const ctaStyle = primaryCTA ? style.primary : style.secondary

    return (
        <button disabled={disabled}
            onClick={onClick}
            className={`${style.fab_button} ${className} ${ctaStyle}`}
        >
            <FontAwesomeIcon
                className={style.fa_icon}
                icon={icon}
            />
        </button>
    )
}

export default FabButton
