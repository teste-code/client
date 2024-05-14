import React from 'react'
import Header from '@/components/global/navbar/Header'
import { ConfigAll } from '@/utils/interfaces/interglobals'
import CenterRightLayout from './components/CenterRightLayout'

const RightLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div>
      <Header />
      <CenterRightLayout>
        {children}
      </CenterRightLayout >
    </div>
  )
}

export default RightLayout
