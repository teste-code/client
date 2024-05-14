import React from 'react'
import styles from "./logos.module.sass"
import { MdOutlineLibraryMusic } from 'react-icons/md'
import Link from 'next/link'

const AppLogo = () => {
  return (
    <Link className={styles.Applogo} href={"/"}>
       <MdOutlineLibraryMusic fontSize={28} /> <span>GhettoMusic</span> 
    </Link>
  )
}

export default AppLogo
