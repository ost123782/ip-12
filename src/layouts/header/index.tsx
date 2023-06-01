import styles from './header.module.css'

export default function header () {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.list__item}>Головна</li>
                    <li className={styles.list__item}>Про нас</li>
                    <li className={styles.list__item}>Навчання</li>
                    <li className={styles.list__item}>Відпочинок</li>
                </ul>
            </nav>
        </header>
    )
}