import styles from './navbar.module.scss'
import { SVG_logo, SVG_logo1 } from './SVG/SVG_logo'
import { Typography} from '@mui/material';
import Link from 'next/link'
import { AllInclusive, Favorite, Call, EventAvailable, Telegram, PeopleAlt } from '@mui/icons-material';
import { SVG_member } from './SVG/SVG_member';


export default function Navbar({}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="home" className={styles.active}>
                    <Link href='/'>
                        <a>
                          <div className={styles.svg}><SVG_logo /></div>
                          <Typography variant="h4">Pranic Family</Typography>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>


      </>
    )
  }