'use client'

import BurgerIcon from '@/ui/burger_icon'
import styles from './header.module.css'
import { useContext } from 'react'
import { Burger_context } from '@/context/burger_context/burger_context'

function Header() {
  const {isOpen} = useContext(Burger_context)
  return (
    <header
     className={isOpen ? styles.header_active : styles.header}
     >
        <BurgerIcon/>
    </header>
  )
}

export default Header