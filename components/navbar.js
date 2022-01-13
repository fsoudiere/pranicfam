import styles from './navbar.module.scss'
import { SVG_logo } from './SVG/SVG_logo'
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
                <li id="members">
                  <div className={styles.svg}><SVG_member /></div>
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