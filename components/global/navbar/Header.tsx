import Link from 'next/link'
import React from 'react'

import style from "./header.module.sass"
import AppLogo from '../logos/AppLogo'
import { LinksHeader } from '@/utils/data/Links'
const Header = () => {
  return (
    <header className={style.header} >
      <AppLogo active={true} />
      <nav>
        <ul>
          {LinksHeader.map((link, index) => (<li key={index}>
            <Link href={link.path}>
              {link.figure}
              <span>{link.titlePath} </span>
            </Link></li>))}
        </ul>
      </nav>
    </header>
  )
}

export default Header