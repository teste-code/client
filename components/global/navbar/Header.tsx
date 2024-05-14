import Link from 'next/link'
import React from 'react'
import { LinksHeader } from '@/utils/data/Links'

const Header = () => {
  return (
    <header >
        <nav>
            <ul>
                {LinksHeader.map((link, index)=>(<li key={link.id}><Link href={link.path}> {link.titlePath} </Link></li>))}
            </ul>
        </nav>
    </header>
  )
}

export default Header