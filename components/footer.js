import styles from './footer.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer({href}) {
  const router = useRouter()
    if (router.pathname == '/story/[id]') {
      return null
    } else {
    return (

        <div className={styles.footer}>
          <p>
         <Link href='https://docs.google.com/document/d/18RvseS_7tTNCmfKpO1Q30sDjTvTDyxrmxpPJETWTLIg/edit'>
           <a>Privacy & Terms</a></Link>
         </p>

        </div>



    )
  }
}