import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab_button, cta_button, fa_icon, fa_icon_with_text, style_primary, style_secondary } from './scss/button.module.scss'
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

    const style = primaryCTA ? style_primary : style_secondary

    if (icon && children) {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${cta_button} ${className} ${style}`} >
                <FontAwesomeIcon className={fa_icon_with_text} icon={icon} />
                {children}
            </button>
        )
    }
    if (icon && !children) {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${fab_button} ${className} ${style}`} >
                <FontAwesomeIcon className={fa_icon} icon={icon} />
            </button>
        )
    }
    else {
        return (
            <button disabled={disabled} onClick={() => handelOnClick()} className={`${cta_button} ${className} ${style}`}>
                {children}
            </button>
        )
    }

}