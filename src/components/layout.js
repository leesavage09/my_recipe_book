import React from 'react'
import "normalize.css"
import "../pages/scss/global.scss"

const Layout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Layout