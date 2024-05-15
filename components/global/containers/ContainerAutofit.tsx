import React from 'react'
import style from './container.module.sass'
import { ConfigAll } from '@/utils/interfaces/interglobals'

const ContainerAutofit: React.FC <ConfigAll> = ({children,active = false}) => {
  return (
    <ul className={`${style.container} ${active && style.desctrut}`}>
      {children}
    </ul>
  )
}

export default ContainerAutofit
