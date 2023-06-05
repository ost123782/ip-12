'use client'

import { useContext } from 'react'
import styles from './burger_menu.module.css'
import { Burger_context } from '@/context/burger_context/burger_context'
import Link from 'next/link'

export default function BurgerMenu () {
    const {isOpen, setOpen} = useContext(Burger_context)
    return (
        <div className={isOpen ? styles.burger__menu_active : styles.burger__menu}>
            <nav className={styles.burger__nav}>
                <ul onClick={() => setOpen(!isOpen)} className={styles.nav__list}>
                    <li  className={styles.list__item}><Link href={'/'} >Головна</Link></li>
                    <li className={styles.list__item}><Link href={'/about'}>Про нас</Link></li>
                    <li className={styles.list__item}>Навчання</li>
                    <li className={styles.list__item}>Відпочинок</li>
                </ul>
            </nav>
        </div>
    )
}