import styles from './burger_menu.module.css'

export default function burger_menu () {
    return (
        <div className={styles.burger__menu}>
            <nav className={styles.burger__nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.list__item}>Головна</li>
                    <li className={styles.list__item}>Про нас</li>
                    <li className={styles.list__item}>Навчання</li>
                    <li className={styles.list__item}>Відпочинок</li>
                </ul>
            </nav>
        </div>
    )
}