import styles from './navbar.module.scss'
import SVG from './star'
import { Typography} from '@mui/material';
import Link from 'next/link'
import { AllInclusive, Favorite, Call, EventAvailable, Telegram, PeopleAlt } from '@mui/icons-material';


export default function Navbar({}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="home" className={styles.active}>
                    <Link href='/'>
                        <a>
                          <div className={styles.svg}><SVG /></div>
                          <Typography variant="h2">Pranic Family</Typography>
                        </a>
                    </Link>
                </li>
                <li id="members" className={styles.next}>
                  <div className={styles.svg}><PeopleAlt /></div>
                  <span>Members</span></li>
                <li id="channels" ><Telegram /><span>Channels</span></li>
                <li id="initiations" ><EventAvailable /><span>Events</span></li>
                <li id="contacts" ><Call /><span>Contacts</span></li>
                <li id="love" ><Favorite /><span>Made with Love</span></li>
            </ul>
        </div>


      </>
    )
  }