import Image from 'next/image'
import styles from './navbar.module.scss'
import Link from 'next/link'
import SvgIcon from '@mui/material/SvgIcon';
import { ArrowBack, Check, Home, Favorite, Call, EventAvailable, Telegram, PeopleAlt } from '@mui/icons-material';


export default function Navbar({}) {
    return (
      <>
        
        <div className={styles.nav}>
            <ul className={styles.navmenu}>
                <li id="home" className={styles.active}>
                    <Link href='/' passHref>
                        <a><Home /><span>Pranic Family</span></a>
                    </Link>
                </li>
                <li id="members" className={styles.next}><PeopleAlt /><span>Members</span></li>
                <li id="channels" ><Telegram /><span>Channels</span></li>
                <li id="initiations" ><EventAvailable /><span>Events</span></li>
                <li id="contacts" ><Call /><span>Contacts</span></li>
                <li id="love" ><Favorite /><span>Made with Love</span></li>
            </ul>
        </div>


      </>
    )
  }