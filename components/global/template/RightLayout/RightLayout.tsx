import React from 'react'
import Header from '@/components/global/navbar/Header'
import { ConfigAll } from '@/utils/interfaces/interglobals'
import CenterRightLayout from './components/CenterRightLayout'

const RightLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div>
      <CenterRightLayout>
        <Header />
        <main>
          {children}
        </main>
      </CenterRightLayout >
    </div>
  )
}

export default RightLayout
