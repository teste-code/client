import React from 'react'
import { ConfigAll } from '@/utils/interfaces/interglobals'

const CenterRightLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div>
     { children }
    </div>
  )
}

export default CenterRightLayout
