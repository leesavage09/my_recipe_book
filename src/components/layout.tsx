import React from 'react'
import Head from './head'
import "normalize.css"
import "./scss/global.scss"

const Layout = ({ title, show_back_btn, save_btn_action, children }:{ title:string, show_back_btn?:boolean, save_btn_action?:React.MouseEventHandler<HTMLButtonElement>, children:Array<JSX.Element>|JSX.Element }) => (
    <div>
        <Head title={title} show_back_btn={show_back_btn} save_btn_action={save_btn_action} />
        {children}
    </div>
)

export default Layout