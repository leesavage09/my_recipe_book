import React from 'react'
import Head from './head'
import "normalize.css"
import "./scss/global.scss"

const Layout = ({ back_btn_action, title, show_back_btn, save_btn_action, children }:{ back_btn_action?:Function, title:String, show_back_btn:Boolean, save_btn_action:Function, children:JSX.Element }) => (
    <div>
        <Head back_btn_action={back_btn_action} title={title} show_back_btn={show_back_btn} save_btn_action={save_btn_action} />
        {children}
    </div>
)

export default Layout