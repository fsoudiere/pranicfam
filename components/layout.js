
import styles from '../styles/Home.module.css'

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