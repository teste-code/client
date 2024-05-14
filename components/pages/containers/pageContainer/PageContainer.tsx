import { ConfigAll } from '@/utils/interfaces/interglobals'
import React from 'react'
import style from "./page.module.sass"
const PageContainer: React.FC<ConfigAll> = ({children}) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default PageContainer
