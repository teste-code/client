import React from 'react'
import styles from "./logos.module.sass"
import { MdOutlineLibraryMusic } from 'react-icons/md'
import Link from 'next/link'
interface Atcive{
  active?: boolean
}
const AppLogo: React.FC <Atcive> = ({active=false}) => {
  return (
    <Link className={`${styles.Applogo} ${ active && styles.active}`} href={"/"}>
       <MdOutlineLibraryMusic fontSize={28} /> <span>GhettoMusic</span> 
    </Link>
  )
}

export default AppLogo
