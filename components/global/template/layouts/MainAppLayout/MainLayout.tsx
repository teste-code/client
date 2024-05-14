import { ConfigAll } from '@/utils/interfaces/interglobals'
import React from 'react'
import CenterRightLayout from '../../RightLayout/components/CenterRightLayout'

const MainAppLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div>
      <CenterRightLayout />
      {children}
    </div>
  )
}

export default MainAppLayout