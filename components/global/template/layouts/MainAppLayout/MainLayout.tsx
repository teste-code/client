import { ConfigAll } from '@/utils/interfaces/interglobals'
import React from 'react'
import RightLayout from '../../RightLayout/RightLayout'
import LeftLayout from '../../leftLayout/LeftLayout'
import style from "./style.module.sass"
const MainAppLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div className={style.layoutMain}>
      <LeftLayout />
      <RightLayout>
        {children}
      </RightLayout>
    </div>
  )
}

export default MainAppLayout