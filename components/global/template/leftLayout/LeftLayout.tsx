import React from 'react'
import LinksSidebar from "./components/LinksSidebar"
import BottomLefLayuot from "./components/BottomLefLayuot"
import AppLogo from "../../logos/AppLogo"
import style from "./left.module.sass"
const LeftLayout = () => {
  return (
    <aside className={style.sidebar}>
      <div className={style.top}>
        <AppLogo />
        <LinksSidebar />
      </div>
      <BottomLefLayuot />
    </aside>
  )
}

export default LeftLayout
