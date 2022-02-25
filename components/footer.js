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
           <p></p>
           <iframe src="https://open.spotify.com/embed/playlist/2RTP9cDWDd329B57o1eXqy?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
         </p>

        </div>



    )
  }
}