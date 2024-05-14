import React from 'react'
import AppLogo from '../logos/AppLogo'
import style from "./footer.module.sass"
import LinksMapSite from './components/LinksMapSite'
const Footer = () => {
  return (
    <footer className={style.footer} >
       <AppLogo />
       <LinksMapSite />
    </footer>
  )
}

export default Footer
