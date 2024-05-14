import { ConfigAll } from '@/utils/interfaces/interglobals'
import React from 'react'
import RightLayout from '../../RightLayout/RightLayout'
import LeftLayout from '../../leftLayout/LeftLayout'

const MainAppLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div>
      <LeftLayout />
      <RightLayout>
        {children}
      </RightLayout>
    </div>
  )
}

export default MainAppLayout