import styles from './bubble.module.scss'

export default function Bubble({ children, bid }) {
    return (
      <>
        <section className={styles.bubble} id={bid}>{children}</section>

      </>
    )
  }