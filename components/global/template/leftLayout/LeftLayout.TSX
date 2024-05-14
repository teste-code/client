import React from 'react'
import LinksSidebar from "./components/LinksSidebar"
import BottomLefLayuot from "./components/BottomLefLayuot"
import AppLogo from "../../logos/AppLogo"

const LeftLayout = () => {
  return (
    <aside>
      <div>
        <AppLogo />
        <LinksSidebar />
      </div>
      <BottomLefLayuot />
    </aside>
  )
}

export default LeftLayout
