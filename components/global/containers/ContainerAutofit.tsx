import React from 'react'
import style from './container.module.sass'
import { ConfigAll } from '@/utils/interfaces/interglobals'

const ContainerAutofit: React.FC <ConfigAll> = ({children}) => {
  return (
    <ul className={style.container}>
      {children}
    </ul>
  )
}

export default ContainerAutofit
