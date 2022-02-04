import styles from './noise.module.scss'

export default function NoiseBG() {
    return (
      <>
        <section>
          <div className={styles.isolate}>
            <div className={styles.noise}></div>
            <div className={styles.overlay}></div>
          </div>
        </section>

      </>
    )
}
