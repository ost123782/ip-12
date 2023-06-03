import styles from './burger_icon.module.css'

function burger_icon() {
  return (
    <div className={styles.burger__icon}>
        <div className={styles.icon__line}></div>
        <div className={styles.icon__line}></div>
        <div className={styles.icon__line}></div>
    </div>
  )
}

export default burger_icon