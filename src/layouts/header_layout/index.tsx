'use client'
import BurgerContext from "@/context/burger_context"
import Header from "./header"
import BurgerMenu from "./burger_menu"

function HeaderLayout() {
  return (
    <>
        <BurgerContext>
            <Header />
            <BurgerMenu />
        </BurgerContext>
    </>
  )
}

export default HeaderLayout