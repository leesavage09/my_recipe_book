import React from 'react'
import Head from './head'
import "normalize.css"
import "./scss/global.scss"

const Layout = (props) => (
    <div>
        <Head title={props.title} />
        <div className='container'>
            {props.children}
        </div>
    </div>
)

export default Layout