import Link from 'next/link'
import React from 'react'
import style from "../left.module.sass"
const LinksSidebar = () => {
    return (
        <nav>
            <ul>
                <li className={style.desible} >Opções</li>
                <li> <Link href="/">Músicas</Link> </li>
                <li> <Link href="/sounds/hits">Hits</Link> </li>
                <li> <Link href="/sounds/news">News</Link> </li>
            </ul>
        </nav>
    )
}

export default LinksSidebar
