
import styles from '../styles/Home.module.scss'

export default function Layout({ children }) {
    return (
      <>
        <h2 className={styles.title}>
          The Pranic Family
        </h2>
        <main>{children}</main>

      </>
    )
  }