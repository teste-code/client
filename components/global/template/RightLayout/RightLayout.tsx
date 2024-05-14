import React from 'react'
import Header from '@/components/global/navbar/Header'
import { ConfigAll } from '@/utils/interfaces/interglobals'
import CenterRightLayout from './components/CenterRightLayout'
import style from "./rigth.module.sass"
import Footer from '../../footer/Footer'

const RightLayout: React.FC<ConfigAll> = ({ children }) => {
  return (
    <div className={style.RightLayout} >
      <CenterRightLayout>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </CenterRightLayout >
    </div>
  )
}

export default RightLayout
