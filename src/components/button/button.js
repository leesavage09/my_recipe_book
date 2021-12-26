import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './scss/button.module.scss'
import { navigate } from "gatsby"

export const Button = ({ primaryCTA, icon, children, to, className, onClick, disabled }) => {
//TOD there should be a few buttons
    const handelOnClick = () => {
        if (to) {
            navigate(to)
        }
        if (onClick) {
            onClick()
        }
    }

    const ctaStyle = primaryCTA ? style.primary : style.secondary

    if (icon && children) {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${style.cta_button} ${className} ${ctaStyle}`} >
                <FontAwesomeIcon className={style.fa_icon_with_text} icon={icon} />
                {children}
            </button>
        )
    }
    if (icon && !children) {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${style.fab_button} ${className} ${ctaStyle}`} >
                <FontAwesomeIcon className={style.fa_icon} icon={icon} />
            </button>
        )
    }
    else {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${style.cta_button} ${className} ${ctaStyle}`}>
                {children}
            </button>
        )
    }

}