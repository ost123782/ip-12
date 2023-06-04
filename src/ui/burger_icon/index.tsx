'use client'
import { useContext } from 'react'
import styles from './burger_icon.module.css'
import { Burger_context } from '@/context/burger_context/burger_context'

function BurgerIcon() {
  const {isOpen, setOpen} = useContext(Burger_context)

  return (
    <div 
    className={!isOpen ? styles.burger__icon : styles.burger__icon_active}
    onClick={() => {setOpen(!isOpen)}}
    >
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
        <div className={styles.burger__line}></div>
    </div>
  )
}

export default BurgerIcon