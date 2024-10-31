import { Link } from "react-router-dom"
import { NavBarDrawer } from "../../components/NavBarDrawer"

import NavBarStyles from "./NavBar.module.scss"
import { useEffect, useState } from "react"

export function NavBar() {

  const [width, setWindowWidth] = useState(window.innerWidth)

  const navbarTabs = ["events","members","research","about"]

  useEffect(() => {
    function onResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }

  }, [])

  return (
    (width >= 440) 
    ?
      <div className={`${NavBarStyles.container}`} >
        {/* <Link to={"/"} className={`${NavBarStyles.linkComponent}`} >Home</Link>
        <Link to={"/research"} className={`${NavBarStyles.linkComponent}`} >Research</Link>
        <Link to={"/about"} className={`${NavBarStyles.linkComponent}`} >About</Link> */}
        {navbarTabs.map((tab, index )=> {
          return <Link to={`/${tab.toLowerCase()}`} className={`${NavBarStyles.linkComponent}`} key={index} >{tab}</Link>
        })}
      </div>

    : <NavBarDrawer navbarTabs={navbarTabs} />

  )
}