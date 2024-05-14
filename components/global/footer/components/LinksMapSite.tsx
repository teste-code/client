import { LinksFooter } from '@/utils/data/Links'
import Link from 'next/link'
import React from 'react'
import style from "../footer.module.sass"
const LinksMapSite = () => {
  return (
    <ul className={style.map}>
      {LinksFooter.map((link, index)=>(
       <li key={index} >
          <Link href={link.path} > {link.titlePath} </Link>
       </li>
      ))}
    </ul>
  )
}

export default LinksMapSite
