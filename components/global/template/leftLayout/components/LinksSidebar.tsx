import Link from 'next/link'
import React from 'react'

const LinksSidebar = () => {
    return (
        <>
            <ul className=''>
                <li >Menu</li>
                <li> <Link href="/">Músicas</Link> </li>
                <li> <Link href="/">PlayLists</Link> </li>
                <li> <Link href="/">Albums</Link> </li>
            </ul>
            <ul className=''>
                <li >Menu</li>
                <li> <Link href="/">Casts</Link> </li>
                <li> <Link href="/">Hits</Link> </li>
                <li> <Link href="/">News</Link> </li>
            </ul>
        </>
    )
}

export default LinksSidebar
