import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

import HeaderAndNavBarLayoutStyles from "./HeaderAndNavBarLayout.module.scss"

export function HeaderAndNavBarLayout() {
  return (
    <>
      <div className={`${HeaderAndNavBarLayoutStyles.container}`} >
        <div>
          <Header />
          <NavBar />
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  )
}