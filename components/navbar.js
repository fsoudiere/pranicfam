import styles from './navbar.module.scss'
import { SVG_logo } from './SVG/SVG_logo'
import { Typography} from '@mui/material';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
    return (

        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="home" className={styles.active}>
                    <Link href={`${
                      router.pathname == '/story/[id]' ? '/' : 
                      router.pathname == '/apply' ? '/' :
                      router.pathname == '/apply/later' ? '/' : '/en'}`}>
                        <a>
                          <div className={styles.svg}><SVG_logo /></div>
                          <Typography variant="h4">Pranic Family</Typography>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>



    )
  }