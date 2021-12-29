import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Layout({ children }) {
    return (
      <>
        
            <Image
          src="/images/icon/apple-touch-icon.png" // Route of the image file
          height={32} // Desired size with correct aspect ratio
          width={32} // Desired size with correct aspect ratio
          alt="Pranic Family Logo"
        />
        <h2 className={styles.title}>
          The Pranic Family
        </h2>
        <main>{children}</main>

      </>
    )
  }