import React from 'react'
import Head from './head'
import "normalize.css"
import "./scss/global.scss"

const Layout = (props) => (
    <div>
        <Head title={props.title} show_back_btn={props.show_back_btn} save_btn_action={props.save_btn_action} />
        <div className='container'>
            {props.children}
        </div>
    </div>
)

export default Layout